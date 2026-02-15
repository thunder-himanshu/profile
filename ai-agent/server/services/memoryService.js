const Conversation = require('../models/Conversation');

const getConversation = async (sessionId) => {
  let conversation = await Conversation.findOne({ sessionId });
  if (!conversation) {
    conversation = new Conversation({ sessionId, messages: [] });
    await conversation.save();
  }
  return conversation;
};

const addMessage = async (sessionId, role, content) => {
  const conversation = await getConversation(sessionId);
  conversation.messages.push({ role, content });
  await conversation.save();
  return conversation;
};

const getHistory = async (sessionId) => {
  const conversation = await getConversation(sessionId);
  // Transform to format expected by LLM (e.g. OpenAI format)
  return conversation.messages.map(msg => ({
    role: msg.role,
    content: msg.content
  }));
};

module.exports = {
  getConversation,
  addMessage,
  getHistory
};
