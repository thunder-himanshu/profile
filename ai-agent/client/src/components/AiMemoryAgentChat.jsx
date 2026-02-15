import React, { useState, useEffect, useRef } from 'react';
import { v4 as uuidv4 } from 'uuid';

const AiMemoryAgentChat = () => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [messages, setMessages] = useState([]);
  const [inputValue, setInputValue] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [sessionId] = useState(() => uuidv4());
  const messagesEndRef = useRef(null);
  const menuRef = useRef(null);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages]);

  // Close menu when clicking outside
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (menuRef.current && !menuRef.current.contains(event.target)) {
        setIsMenuOpen(false);
      }
    };

    if (isMenuOpen) {
      document.addEventListener('mousedown', handleClickOutside);
    }

    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [isMenuOpen]);

  const clearChat = () => {
    setMessages([]);
    setIsMenuOpen(false);
  };

  const sendMessage = async (e) => {
    e.preventDefault();
    if (!inputValue.trim() || isLoading) return;

    const userMessage = inputValue.trim();
    setInputValue('');
    
    // Add user message to UI
    setMessages(prev => [...prev, { role: 'user', content: userMessage }]);
    setIsLoading(true);

    try {
      const response = await fetch('http://localhost:5000/api/agent/chat', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          message: userMessage,
          sessionId: sessionId,
        }),
      });

      if (!response.ok) {
        throw new Error('Failed to get response');
      }

      const data = await response.json();
      setMessages(prev => [...prev, { role: 'assistant', content: data.response }]);
    } catch (error) {
      console.error('Error sending message:', error);
      setMessages(prev => [...prev, { 
        role: 'assistant', 
        content: 'Sorry, I encountered an error. Please try again.' 
      }]);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="font-display text-white bg-background-dark h-dvh overflow-hidden flex flex-col neural-bg relative">
      {/* Background Grid Overlay */}
      <div className="absolute inset-0 grid-lines pointer-events-none z-0"></div>
      {/* Background Abstract Shapes (Simulating Neural Glows) */}
      <div className="absolute top-1/4 left-0 w-64 h-64 bg-primary/20 rounded-full blur-[80px] -translate-x-1/2 pointer-events-none z-0"></div>
      <div className="absolute bottom-1/3 right-0 w-80 h-80 bg-accent-cyan/10 rounded-full blur-[100px] translate-x-1/3 pointer-events-none z-0"></div>

      {/* Top Navigation / Header */}
      <header className="relative z-20 px-4 sm:px-6 pt-5 pb-4 flex items-center justify-between glass-input border-b-0">
        <div className="flex items-center gap-3">
          <div className="relative">
            <div className="w-10 h-10 rounded-full bg-gradient-to-br from-primary to-indigo-900 border border-white/10 flex items-center justify-center overflow-hidden">
              <span className="material-icons-round text-white text-lg">smart_toy</span>
            </div>
            <div className="absolute -bottom-0.5 -right-0.5 w-3 h-3 bg-accent-cyan rounded-full border-2 border-background-dark animate-pulse"></div>
          </div>
          <div>
            <h1 className="text-lg font-bold tracking-tight leading-tight">Nexus AI</h1>
            <div className="flex items-center gap-1.5 opacity-60">
              <span className="text-[10px] uppercase tracking-wider font-semibold text-accent-cyan">Memory Active</span>
            </div>
          </div>
        </div>
        <div className="relative" ref={menuRef}>
          <button 
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="p-2 rounded-full hover:bg-white/5 transition-colors text-white/70"
          >
            <span className="material-icons-round">more_vert</span>
          </button>
          
          {isMenuOpen && (
            <div className="absolute right-0 mt-2 w-48 rounded-xl bg-background-dark/95 backdrop-blur-xl border border-white/10 shadow-2xl shadow-black/50 overflow-hidden z-50">
              <div className="py-1">
                <button
                  onClick={clearChat}
                  className="w-full px-4 py-2.5 text-left text-sm text-white/80 hover:bg-white/5 transition-colors flex items-center gap-3"
                >
                  <span className="material-icons-round text-base text-white/60">delete_outline</span>
                  Clear Chat
                </button>
                <button
                  onClick={() => {
                    navigator.clipboard.writeText(sessionId);
                    setIsMenuOpen(false);
                  }}
                  className="w-full px-4 py-2.5 text-left text-sm text-white/80 hover:bg-white/5 transition-colors flex items-center gap-3"
                >
                  <span className="material-icons-round text-base text-white/60">content_copy</span>
                  Copy Session ID
                </button>
                <div className="border-t border-white/10 my-1"></div>
                <div className="px-4 py-2 text-xs text-white/40">
                  Session: {sessionId.slice(0, 8)}
                </div>
              </div>
            </div>
          )}
        </div>
      </header>

      {/* Main Content Layout */}
      <main className="flex-1 relative z-10 flex overflow-hidden">
        {/* Chat Area */}
        <div className="flex-1 flex flex-col relative">
          {/* Chat Messages Scroll Area */}
          <div className="flex-1 overflow-y-auto p-4 space-y-6 no-scrollbar pb-24">
            {messages.length === 0 && (
              <div className="flex justify-center items-center h-full">
                <div className="text-center">
                  <div className="w-16 h-16 rounded-full bg-primary/20 flex items-center justify-center mx-auto mb-4">
                    <span className="material-icons-round text-3xl text-primary">auto_awesome</span>
                  </div>
                  <h2 className="text-xl font-bold mb-2">Welcome to Nexus AI</h2>
                  <p className="text-white/60 text-sm">Start a conversation with your AI agent</p>
                </div>
              </div>
            )}

            {messages.map((msg, idx) => (
              <div key={idx} className={`flex gap-3 max-w-[85%] ${msg.role === 'user' ? 'ml-auto justify-end' : 'mr-auto'} group`}>
                {msg.role === 'assistant' && (
                  <div className="flex-shrink-0 mt-auto">
                    <div className="w-6 h-6 rounded-full bg-primary/20 flex items-center justify-center">
                      <span className="material-icons-round text-xs text-primary">auto_awesome</span>
                    </div>
                  </div>
                )}
                <div className={`rounded-2xl p-4 text-sm leading-relaxed ${
                  msg.role === 'user' 
                    ? 'bg-gradient-to-br from-primary to-indigo-600 text-white shadow-lg shadow-primary/20 rounded-br-sm' 
                    : 'glass-bubble-ai text-gray-200 shadow-sm rounded-bl-sm'
                }`}>
                  <p className="whitespace-pre-wrap">{msg.content}</p>
                </div>
              </div>
            ))}

            {isLoading && (
              <div className="flex gap-3 max-w-[85%] mr-auto">
                <div className="w-6 h-6 rounded-full bg-transparent"></div>
                <div className="glass-bubble-ai rounded-2xl rounded-bl-sm px-4 py-3 flex items-center gap-1.5 w-16">
                  <div className="w-1.5 h-1.5 bg-accent-cyan rounded-full animate-bounce" style={{ animationDelay: '0ms' }}></div>
                  <div className="w-1.5 h-1.5 bg-accent-cyan rounded-full animate-bounce" style={{ animationDelay: '150ms' }}></div>
                  <div className="w-1.5 h-1.5 bg-accent-cyan rounded-full animate-bounce" style={{ animationDelay: '300ms' }}></div>
                </div>
              </div>
            )}
            <div ref={messagesEndRef} />
          </div>

          {/* Input Area */}
          <div className="absolute bottom-0 left-0 right-0 p-4 pt-6 bg-gradient-to-t from-background-dark via-background-dark/90 to-transparent">
            <form onSubmit={sendMessage} className="glass-input rounded-full pl-5 pr-2 py-2 flex items-center gap-3 shadow-2xl shadow-primary/10 border border-white/10">
              <button type="button" className="text-white/40 hover:text-accent-cyan transition-colors">
                <span className="material-icons-round">add_circle_outline</span>
              </button>
              <input 
                className="bg-transparent border-none focus:ring-0 text-sm text-white placeholder-white/30 flex-1 w-full font-light outline-none" 
                placeholder="Access memory..." 
                type="text"
                value={inputValue}
                onChange={(e) => setInputValue(e.target.value)}
                disabled={isLoading}
              />
              <button 
                type="submit"
                disabled={isLoading || !inputValue.trim()}
                className="bg-accent-cyan hover:bg-cyan-300 text-background-dark w-10 h-10 rounded-full flex items-center justify-center transition-all shadow-[0_0_15px_rgba(34,211,238,0.4)] disabled:opacity-50 disabled:cursor-not-allowed"
              >
                <span className="material-icons-round text-lg -mr-0.5 mt-0.5">send</span>
              </button>
            </form>
            <div className="h-4 w-1/3 mx-auto bg-white rounded-full mt-4 opacity-20"></div>
          </div>
        </div>

        {/* Mobile Overlay for Sidebar */}
        {isSidebarOpen && (
          <div 
            className="fixed inset-0 bg-black/60 backdrop-blur-sm z-40 sm:hidden"
            onClick={() => setIsSidebarOpen(false)}
          ></div>
        )}

        {/* Memory Nodes Panel (Right Side Visualizer) */}
        <div className={`fixed inset-y-0 right-0 z-50 w-64 bg-background-dark/95 border-l border-white/5 flex-col items-center py-6 transition-transform duration-300 ease-in-out sm:relative sm:translate-x-0 sm:flex sm:bg-black/20 sm:backdrop-blur-sm sm:z-20 sm:w-20 lg:w-64 ${isSidebarOpen ? 'translate-x-0' : 'translate-x-full'}`}>
          <div className="absolute inset-0 bg-gradient-to-b from-transparent via-primary/5 to-transparent pointer-events-none"></div>
          <div className="hidden lg:block w-full px-6 mb-8">
            <h3 className="text-xs font-bold uppercase tracking-widest text-white/50 mb-1">Memory Graph</h3>
            <div className="h-0.5 w-8 bg-accent-cyan rounded-full"></div>
          </div>
          <div className="flex-1 flex flex-col items-center w-full relative space-y-12">
            <div className="absolute top-4 bottom-4 left-1/2 lg:left-8 w-px bg-gradient-to-b from-transparent via-white/20 to-transparent -translate-x-1/2 border-l border-dashed border-white/20"></div>
            <div className="relative z-10 group cursor-pointer w-full flex lg:px-4">
              <div className="mx-auto lg:mx-0 w-3 h-3 rounded-full bg-background-dark border-2 border-white/30 group-hover:border-accent-cyan transition-colors mt-1.5"></div>
              <div className="hidden lg:block ml-4">
                <p className="text-[10px] text-white/40 group-hover:text-white transition-colors">Initial Protocol</p>
              </div>
            </div>
            <div className="relative z-10 group cursor-pointer w-full flex lg:px-4">
              <div className="mx-auto lg:mx-0 w-4 h-4 rounded-full bg-accent-cyan shadow-[0_0_15px_rgba(34,211,238,0.6)] animate-pulse-node mt-1 relative">
                <div className="absolute inset-0 bg-white rounded-full animate-ping opacity-20"></div>
              </div>
              <div className="hidden lg:block ml-4 bg-white/5 p-2 rounded-lg border border-accent-cyan/30 backdrop-blur-md">
                <p className="text-[10px] text-accent-cyan font-bold mb-0.5">Active Context</p>
                <p className="text-[10px] text-white/80">Session: {sessionId.slice(0, 8)}</p>
              </div>
            </div>
            <div className="relative z-10 group cursor-pointer w-full flex lg:px-4">
              <div className="mx-auto lg:mx-0 w-3 h-3 rounded-full bg-background-dark border-2 border-white/30 group-hover:border-purple-400 transition-colors mt-1.5"></div>
              <div className="hidden lg:block ml-4">
                <p className="text-[10px] text-white/40 group-hover:text-white transition-colors">Memory Store</p>
              </div>
            </div>
            <div className="relative z-10 group cursor-pointer w-full flex lg:px-4">
              <div className="mx-auto lg:mx-0 w-2 h-2 rounded-full bg-white/10 mt-2"></div>
            </div>
          </div>
          <div className="mt-auto px-2 lg:px-6 w-full opacity-60">
            <div className="aspect-square w-full rounded-lg overflow-hidden border border-white/10 relative">
              <img 
                alt="Abstract view of earth network connections from space" 
                className="w-full h-full object-cover opacity-60 mix-blend-screen" 
                src="https://lh3.googleusercontent.com/aida-public/AB6AXuBWuedWjAILQiHh0V_9ICP84QTp7V-a8tKSgqdymCvwNiASTldoFWCPjit00Egkh1cvT8WfYuAB49u89yKo6NKD3TpwWtRpOYJMMuJU9W1Db8QgqMZcdrdc0wAJX32T3fWt5Ig7xd1ye9BJ0JXgTn9h9OvLl89WX8Ks7UBh8gaoJS9ZyQruAgJPJ-oC9B38OTODw8zE0v4-mgYYSO6c-05MC4j2yaq8Ix_h9bfHnZFO5JePvDiPvaLCSeLh5otoOZMkOYl89II_kis" 
              />
              <div className="absolute inset-0 bg-primary/30 mix-blend-color"></div>
              {/* Animated light sweep to simulate rotation */}
              <div className="absolute inset-0 overflow-hidden">
                <div 
                  className="absolute inset-y-0 w-1/2 bg-gradient-to-r from-transparent via-white/20 to-transparent blur-xl"
                  style={{
                    animation: 'earth-light-sweep 8s ease-in-out infinite',
                    left: '-50%'
                  }}
                ></div>
              </div>
            </div>
          </div>
        </div>

        {/* Mobile Overlay Trigger for Memory (Small Screens Only) */}
        <button 
          onClick={() => setIsSidebarOpen(!isSidebarOpen)}
          className="sm:hidden absolute top-32 right-0 bg-primary/20 border-l border-t border-b border-white/10 p-2 rounded-l-xl backdrop-blur-md z-30 shadow-lg text-accent-cyan"
        >
          <span className="material-icons-round text-accent-cyan text-sm animate-pulse">hub</span>
        </button>
      </main>
    </div>
  );
};

export default AiMemoryAgentChat;
