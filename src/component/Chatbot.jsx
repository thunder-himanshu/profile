import React, { useState, useRef, useEffect } from 'react';
import { MessageCircle, X, Send, Loader2, Sparkles } from 'lucide-react';
import { GoogleGenerativeAI } from '@google/generative-ai';
import { personalInfo } from '../constant/personalData';

const Chatbot = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState([
    {
      role: 'model',
      text: "Hi! I'm Himanshu's AI assistant. Ask me anything about his skills, projects, or experience!",
    },
  ]);
  const [inputText, setInputText] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const messagesEndRef = useRef(null);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages, isOpen]);

  const handleSendMessage = async (e) => {
    e.preventDefault();
    if (!inputText.trim()) return;

    const userMessage = inputText.trim();
    setMessages((prev) => [...prev, { role: 'user', text: userMessage }]);
    setInputText('');
    setIsLoading(true);

    try {
      const apiKey = import.meta.env.VITE_GEMINI_API_KEY;
      
      if (!apiKey) {
        throw new Error("API Key not found. Please set VITE_GEMINI_API_KEY in .env");
      }

      const genAI = new GoogleGenerativeAI(apiKey);
      const model = genAI.getGenerativeModel({ model: "gemini-2.5-flash" });

      const systemPrompt = `
        You are an AI assistant for Himanshu Ratnakar's portfolio website.
        Your role is to answer questions strictly based on the following context about Himanshu.
        
        CONTEXT:
        ${JSON.stringify(personalInfo, null, 2)}
        
        INSTRUCTIONS:
        1. Answer ONLY questions related to Himanshu, his skills, projects, experience, or the information provided in the context.
        2. If a user asks about general topics (e.g., "What is the capital of France?", "Write a python script for..."), politely refuse and guide them back to asking about Himanshu.
        3. Be professional, friendly, and concise.
        4. Use "I" to refer to the AI assistant, and "Himanshu" to refer to the developer.
        5. If the answer is not in the context, say you don't have that information.
      `;
      
      const prompt = `${systemPrompt}\n\nUser: ${userMessage}`;
      
      const result = await model.generateContent(prompt);
      const response = await result.response;
      const text = response.text();

      setMessages((prev) => [...prev, { role: 'model', text: text }]);
    } catch (error) {
      console.error("Error generating response:", error);
      setMessages((prev) => [
        ...prev,
        { role: 'model', text: "Sorry, I encountered an error. Please checks the API key or try again later." },
      ]);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <>
      {/* Floating Button */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="fixed bottom-4 right-4 sm:bottom-6 sm:right-6 z-50 p-3 sm:p-4 bg-gradient-to-r from-blue-600 to-cyan-500 rounded-full shadow-lg hover:shadow-cyan-500/50 transition-all duration-300 transform hover:scale-110 group"
      >
        {isOpen ? (
          <X className="w-5 h-5 sm:w-6 sm:h-6 text-white" />
        ) : (
          <MessageCircle className="w-5 h-5 sm:w-6 sm:h-6 text-white" />
        )}
        {/* Pulse effect */}
        {!isOpen && (
          <span className="absolute -inset-1 rounded-full bg-cyan-400 opacity-30 animate-ping"></span>
        )}
      </button>

      {/* Chat Window */}
      {isOpen && (
        <div className="fixed bottom-20 right-4 sm:bottom-24 sm:right-6 z-50 w-[calc(100vw-2rem)] sm:w-96 bg-[#0a192f]/95 backdrop-blur-md border border-cyan-500/30 rounded-2xl shadow-2xl overflow-hidden flex flex-col font-poppins h-[60vh] sm:h-[600px] transition-all duration-300 animate-slide-up">
          {/* Header */}
          <div className="bg-gradient-to-r from-blue-900/80 to-cyan-900/80 p-4 border-b border-cyan-500/20 flex items-center gap-3 shadow-md">
            <div className="p-2 bg-cyan-500/20 rounded-full border border-cyan-500/30">
              <Sparkles className="w-5 h-5 text-cyan-400" />
            </div>
            <div>
              <h3 className="text-white font-semibold text-base tracking-wide">Himanshu's AI</h3>
              <p className="text-xs text-cyan-300 flex items-center gap-1">
                <span className="w-1.5 h-1.5 rounded-full bg-green-500 animate-pulse"></span>
                Online & Ready to Help
              </p>
            </div>
          </div>

          {/* Messages Area */}
          <div className="flex-1 overflow-y-auto p-4 sm:p-6 space-y-6 scrollbar-thin scrollbar-thumb-cyan-900/50 scrollbar-track-transparent">
            {messages.map((msg, index) => (
              <div
                key={index}
                className={`flex ${msg.role === 'user' ? 'justify-end' : 'justify-start'} animate-fade-in`}
              >
                <div
                  className={`relative max-w-[85%] p-4 rounded-2xl text-sm leading-relaxed shadow-md ${
                    msg.role === 'user'
                      ? 'bg-gradient-to-br from-blue-600 to-cyan-600 text-white rounded-br-sm'
                      : 'bg-white/5 text-gray-100 border border-white/10 rounded-bl-sm backdrop-blur-sm'
                  }`}
                >
                  {msg.text}
                </div>
              </div>
            ))}
            {isLoading && (
              <div className="flex justify-start animate-pulse">
                <div className="bg-white/5 border border-white/10 p-4 rounded-2xl rounded-bl-sm flex items-center gap-3">
                  <Loader2 className="w-5 h-5 text-cyan-400 animate-spin" />
                  <span className="text-xs text-gray-400 font-medium">Analyzing profile...</span>
                </div>
              </div>
            )}
            <div ref={messagesEndRef} />
          </div>

          {/* Input Area */}
          <form onSubmit={handleSendMessage} className="p-4 bg-black/40 border-t border-cyan-500/20 backdrop-blur-sm">
            <div className="flex gap-3 items-center">
              <input
                type="text"
                value={inputText}
                onChange={(e) => setInputText(e.target.value)}
                placeholder="Ask regarding Himanshu..."
                className="flex-1 bg-white/5 border border-white/10 rounded-xl px-5 py-3 text-sm text-white placeholder-gray-400 focus:outline-none focus:border-cyan-500/50 focus:ring-1 focus:ring-cyan-500/50 transition-all shadow-inner"
              />
              <button
                type="submit"
                disabled={isLoading || !inputText.trim()}
                className="p-3 bg-gradient-to-r from-blue-600 to-cyan-600 hover:from-blue-500 hover:to-cyan-500 disabled:opacity-50 disabled:cursor-not-allowed rounded-xl text-white shadow-lg shadow-cyan-900/20 transition-all hover:scale-105 active:scale-95"
              >
                <Send className="w-5 h-5" />
              </button>
            </div>
            <div className="text-center mt-2">
                <p className="text-[10px] text-gray-500">
                    AI can make mistakes.
                </p>
            </div>
          </form>
        </div>
      )}
    </>
  );
};

export default Chatbot;
