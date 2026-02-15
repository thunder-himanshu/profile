import { useState, useRef, useEffect } from 'react';
import { sendMessage } from './services/api';
import { v4 as uuidv4 } from 'uuid';
import AiMemoryAgentChat from './components/AiMemoryAgentChat';

function App() {
  const [messages, setMessages] = useState([]);
  const [input, setInput] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [sessionId] = useState(uuidv4());
  const messagesEndRef = useRef(null);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages]);

  const handleSend = async (e) => {
    e.preventDefault();
    if (!input.trim()) return;

    const userMessage = { role: 'user', content: input };
    setMessages((prev) => [...prev, userMessage]);
    setInput('');
    setIsLoading(true);

    try {
      const data = await sendMessage(userMessage.content, sessionId);
      const botMessage = { role: 'assistant', content: data.response };
      setMessages((prev) => [...prev, botMessage]);
    } catch (error) {
      setMessages((prev) => [
        ...prev,
        { role: 'system', content: 'Error: Could not connect to the agent.' },
      ]);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <AiMemoryAgentChat />
  );
}

export default App;
