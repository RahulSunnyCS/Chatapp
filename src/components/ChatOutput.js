import React from 'react';
import "react-chat-elements/dist/main.css"
import MessageBox from "../components/MessageBox"

function ChatOutput({ messages }) {
  return (
    <ul>
      {messages.map((message, index) => (
        <li
          key={index}
          className={`mb-2 ${message.sender === 'user' ? 'text-blue-600' : 'text-green-600'}`}
        >
          <MessageBox
            position={message.sender === 'user' ? "right" : "left"}
            type={"text"}
            title={message.sender === 'user' ? "User" : "AI career assist"}
            content={message.content}
            sender={message.sender}
          />
        </li>

      ))}
    </ul>
  );
}

export default ChatOutput;