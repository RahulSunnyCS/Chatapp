import React, { useState } from 'react';
import ChatOutput from './components/ChatOutput';
import ChatInput from './components/ChatInput';
import axios from 'axios';
import './App.css'

export const scrollToElement = (id, margin = 50) => {
  const $elementWithId = document.querySelector(`#${id}`);
  if ($elementWithId) {
    const yCoordinate =
      $elementWithId.getBoundingClientRect().y + window.scrollY;
    window.scrollTo(0, yCoordinate - margin);
  }
};

function App() {
  const [messages, setMessages] = useState([]);

  const handleMessageSubmit = async (message) => {
    // Add user message to the list
    setMessages((prevMessages) => [...prevMessages, { content: message, sender: 'user' }]);

    // Make request to OpenAI API
    // const response = await makeOpenAIRequest(message);

    // Add OpenAI response to the list
    setMessages((prevMessages) => [...prevMessages, { content: "response", sender: 'openai' }]);
  };

  const makeOpenAIRequest = async (message) => {
    try {
      // Make an API request to OpenAI
      // Replace 'YOUR_OPENAI_API_KEY' with your actual API key
      const response = await axios.post(
        'https://api.openai.com/v1/engines/davinci-codex/completions',
        {
          prompt: message,
          max_tokens: 50,
          temperature: 0.7,
          n: 1
        },
        {
          headers: {
            'Content-Type': 'application/json',
            'Authorization': 'Bearer YOUR_OPENAI_API_KEY'
          }
        }
      );

      // Extract the generated text from the response
      const { choices } = response.data;
      const generatedText = choices[0].text.trim();

      return generatedText;
    } catch (error) {
      console.log('OpenAI API request error:', error);
      return 'An error occurred while fetching the response.';
    }
  };

  return (
    <div className="container mx-auto p-4">
      <div className="border border-gray-300 rounded p-4 mb-4 max-h-96 overflow-y-auto chat-output-container">
        <ChatOutput messages={messages} />
      </div>
      <div className='chat-input'>
        <ChatInput onMessageSubmit={handleMessageSubmit} />
      </div>
    </div>
  );
}

export default App;