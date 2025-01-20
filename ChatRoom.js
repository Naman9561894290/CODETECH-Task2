import React from 'react';

const ChatRoom = ({ messages, sendMessage }) => {
  return (
    <div className="chat-room">
      <div className="messages">
        {messages.map((msg, index) => (
          <p key={index}>{msg}</p>
        ))}
      </div>
      <input
        type="text"
        placeholder="Type your message"
        onKeyDown={(e) => {
          if (e.key === 'Enter') sendMessage(e.target.value);
        }}
      />
    </div>
  );
};

export default ChatRoom;
