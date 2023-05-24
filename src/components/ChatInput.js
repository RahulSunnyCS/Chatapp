import React, { useState } from 'react';
import "react-chat-elements/dist/main.css"
import { MessageBox, Input, Button } from "react-chat-elements"

function ChatInput({ onMessageSubmit }) {
  const [message, setMessage] = useState('');

  const handleSubmit = () => {
    if (message.trim() !== '') {
      onMessageSubmit(message);
      setMessage('');
    }
  };

  const handleChange = (event) => {
    setMessage(event?.target?.value || message)
  }

  return (
    <>
      <Input
        placeholder="Type here..."
        // multiline={true}
        onChange={handleChange}
        value={message}
      />
      <Button text={"Send"} onClick={handleSubmit} title="Send" />
    </>

  );
}

export default ChatInput;