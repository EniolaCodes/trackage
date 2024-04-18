import { useState, useEffect } from 'react';
import { FaArrowUp, FaBackwardFast } from "react-icons/fa6";


import Link from 'next/link';

const Chatbox = () => {
 
  
  const [message, setMessage] = useState('');
  const [messages, setMessages] = useState([]);

  const agentResponses = [
    "Hi there! Welcome to Trackage customer care support. How can I help you?",
    "Of course, I'd like to help you with that. Can you please provide your tracking ID?",
    "Thank you. Let me check that for you."
  ];

  useEffect(() => {
    if (messages.length === 1) {
      setTimeout(() => {
        setMessages((prevMessages) => [...prevMessages, { text: agentResponses[0], sender: 'agent' }]);
      }, 1000); // Delay the agent's first response by 1 second
    } else if (messages.length === 3) {
      setTimeout(() => {
        setMessages((prevMessages) => [...prevMessages, { text: agentResponses[1], sender: 'agent' }]);
      }, 1000); // Delay the agent's second response by 1 second
    } else if (messages.length === 5) {
      setTimeout(() => {
        setMessages((prevMessages) => [...prevMessages, { text: agentResponses[2], sender: 'agent' }]);
      }, 1000); // Delay the agent's third response by 1 second
    }
  }, );

  const handleMessageChange = (e) => {
    setMessage(e.target.value);
  };

  const handleSendMessage = () => {
    if (message.trim() !== '') {
      setMessages((prevMessages) => [...prevMessages, { text: message, sender: 'user' }]);
      setMessage('');
    }
  };

  const handleKeyDown = (e) => {
    if (e.key === 'Enter') {
      e.preventDefault();
      handleSendMessage();
    }
  };

  return (
    <div className="flex flex-col h-full max-w-xl mx-auto mt-8">
      
      <div className="flex justify-end p-4">
        <Link href="/">
          <FaBackwardFast className="text-blue-600 cursor-pointer hover:text-blue-700" size={24} />
        </Link>
      </div>
    
      <div className="flex-1 overflow-y-auto p-4">
        {messages.map((msg, index) => (
          <div
            key={index}
            className={`my-2 p-2 rounded-lg max-w-[90%] ${msg.sender === 'user' ? 'border border-blue-600 ml-auto p-4' : 'bg-blue-100 mr-auto'} text-blue-600 mb-8`}
          >
            {msg.text}
          </div>
        ))}
      </div>
      <div className="flex items-center p-4">
  <input
    type="text"
    className="flex-1 py-2 px-4 rounded-l-full bg-gray-100 mr-2"
    placeholder="Chat with Trackage..."
    value={message}
    onChange={handleMessageChange}
    onKeyDown={handleKeyDown}
  />
  <button className="bg-blue-600 text-white rounded-r-full p-2" onClick={handleSendMessage}>
    <FaArrowUp />
  </button>
</div>
    </div>
  );
};

export default Chatbox;
