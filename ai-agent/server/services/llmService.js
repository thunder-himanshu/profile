const { GoogleGenerativeAI } = require('@google/generative-ai');

const weatherTool = require('../tools/weatherTool');
const calculatorTool = require('../tools/calculatorTool');
const dbQueryTool = require('../tools/dbQueryTool');
const personalDataTool = require('../tools/personalDataTool');

// Initialize Gemini
const genAI = new GoogleGenerativeAI(process.env.GEMINI_API_KEY || '');

// Define function declarations for Gemini
const tools = [
  {
    functionDeclarations: [
      {
        name: weatherTool.name,
        description: weatherTool.description,
        parameters: weatherTool.parameters
      },
      {
        name: calculatorTool.name,
        description: calculatorTool.description,
        parameters: calculatorTool.parameters
      },
      {
        name: dbQueryTool.name,
        description: dbQueryTool.description,
        parameters: dbQueryTool.parameters
      },
      {
        name: personalDataTool.name,
        description: personalDataTool.description,
        parameters: personalDataTool.parameters
      }
    ]
  }
];

const generateResponse = async (messages) => {
  // Check if API Key is present
  if (!process.env.GEMINI_API_KEY) {
    console.warn('GEMINI_API_KEY is missing. Returning mock response.');
    return {
      content: 'I am a mock AI agent. I need a Gemini API Key to think properly.',
      tool_calls: []
    };
  }

  try {
    // Get the generative model
    // Using gemini-2.5-flash: stable model with function calling support
    // See: https://ai.google.dev/gemini-api/docs/models/gemini
    const model = genAI.getGenerativeModel({
      model: 'gemini-2.5-flash',
      tools: tools
    });

    // Convert messages to Gemini format
    const history = [];
    const lastMessage = messages[messages.length - 1];
    
    // Build chat history (excluding the last user message)
    for (let i = 0; i < messages.length - 1; i++) {
      const msg = messages[i];
      if (msg.role === 'user') {
        history.push({
          role: 'user',
          parts: [{ text: msg.content }]
        });
      } else if (msg.role === 'assistant') {
        // For assistant messages with tool calls
        if (msg.tool_calls) {
          const parts = [];
          // Add function call parts
          for (const tc of msg.tool_calls) {
            const funcArgs = JSON.parse(tc.function.arguments);
            parts.push({
              functionCall: {
                name: tc.function.name,
                args: funcArgs
              }
            });
          }
          history.push({
            role: 'model',
            parts: parts
          });
        } else {
          // Regular text response
          history.push({
            role: 'model',
            parts: [{ text: msg.content || 'Processing...' }]
          });
        }
      } else if (msg.role === 'tool') {
        // Tool results - should be added as function response
        // For simplicity in Gemini, we represent tool results as part of the flow
        // Gemini expects functionResponse parts
        // Note: We need the function name, not just the tool_call_id
        // This is a limitation - we'll need to track the function name
        // For now, we'll skip this in history or handle differently
        // Gemini typically expects: user message -> model calls function -> function response -> model responds
      }
    }

    const chat = model.startChat({ history });

    // Send the last message
    console.log('Sending message to Gemini:', lastMessage.content);
    const result = await chat.sendMessage(lastMessage.content);
    const response = result.response;

    console.log('Gemini response received');

    // Check for function calls in the response
    // In Gemini API, function calls are in response.candidates[0].content.parts
    const candidates = response.candidates;
    if (!candidates || candidates.length === 0) {
      throw new Error('No candidates in response');
    }

    const parts = candidates[0].content.parts;
    const functionCalls = parts.filter(part => part.functionCall);

    if (functionCalls && functionCalls.length > 0) {
      console.log('Function calls detected:', functionCalls.length);
      // Convert Gemini function calls to OpenAI-like format for compatibility
      const tool_calls = functionCalls.map((part, index) => ({
        id: `call_${Date.now()}_${index}`,
        type: 'function',
        function: {
          name: part.functionCall.name,
          arguments: JSON.stringify(part.functionCall.args)
        }
      }));

      return {
        content: null,
        tool_calls: tool_calls
      };
    }

    // No function calls, return text response
    const textPart = parts.find(part => part.text);
    const textResponse = textPart ? textPart.text : 'No response generated';
    
    console.log('Text response:', textResponse);

    return {
      content: textResponse,
      tool_calls: []
    };

  } catch (error) {
    console.error('LLM Service Error:', error.message);
    console.error('Full error:', error);
    throw new Error(`Failed to communicate with LLM provider: ${error.message}`);
  }
};

module.exports = { generateResponse };
