import React, { useState } from 'react';
import "react-chat-elements/dist/main.css"
import { MessageBox, Input, Button } from "react-chat-elements"
import "./ChatInput.css"

function ChatInput({ onMessageSubmit }) {
  const [message, setMessage] = useState('');

  const handleSubmit = () => {
    if (message.trim() !== '') {
      onMessageSubmit(message);
      setMessage('');
    }
  };

  const handleChange = (event) => {
    setMessage(event?.target?.value)
  }

  return (
    <>
      <textarea
        className='message-input'
        placeholder="Type here..."
        value={message}
        onChange={handleChange}
      />
      <Button text={"Send"} onClick={handleSubmit} title="Send" />
    </>

  );
}

export default ChatInput;