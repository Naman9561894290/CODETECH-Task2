import React, { useState } from 'react';
import ChatRoom from '../components/ChatRoom';

const Chat = () => {
  const [messages, setMessages] = useState([]);

  const sendMessage = (msg) => {
    setMessages([...messages, msg]);
  };

  return <ChatRoom messages={messages} sendMessage={sendMessage} />;
};

export default Chat;
