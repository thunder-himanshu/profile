const llmService = require('../services/llmService');
const memoryService = require('../services/memoryService');
const toolExecutor = require('../services/toolExecutor');

const chat = async (req, res) => {
  try {
    const { message, sessionId } = req.body;

    if (!message || !sessionId) {
      return res.status(400).json({ error: 'Message and sessionId are required' });
    }

    // 1. Add User Message to Memory
    await memoryService.addMessage(sessionId, 'user', message);

    // 2. Get Conversation History
    let history = await memoryService.getHistory(sessionId);

    // 3. Call LLM
    let llmResponse = await llmService.generateResponse(history);

    // 4. Handle Tool Calls Loop
    let loops = 0;
    while (llmResponse.tool_calls && llmResponse.tool_calls.length > 0 && loops < 5) {
      loops++;
      const toolCalls = llmResponse.tool_calls;

      // Add Assistant Message (with tool calls) to History
      history.push({
        role: 'assistant',
        content: llmResponse.content || null,
        tool_calls: toolCalls
      });

      for (const toolCall of toolCalls) {
        const result = await toolExecutor.executeTool(toolCall);
        
        // Add Tool Result to History
        history.push({
          role: 'tool',
          tool_call_id: toolCall.id,
          content: result
        });
      }

      // Call LLM again with updated history
      llmResponse = await llmService.generateResponse(history);
    }

    // 5. Save Final Assistant Response to Memory
    // We only save the final text response to our simple DB schema for now.
    if (llmResponse.content) {
      await memoryService.addMessage(sessionId, 'assistant', llmResponse.content);
    }

    res.json({ response: llmResponse.content || "I processed the tools but have no final response." });

  } catch (error) {
    console.error('================= Agent Controller Error =================');
    console.error('Error message:', error.message);
    console.error('Error stack:', error.stack);
    console.error('========================================================');
    res.status(500).json({ error: error.message || 'Internal Server Error' });
  }
};

module.exports = { chat };
