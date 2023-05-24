import React from 'react';
import "react-chat-elements/dist/main.css"
import ReactMarkdown from 'react-markdown'
import './MessageBox.css'

function MessageBox({ position, type, content, title, sender }) {


    return (
        <div className={`${position} message-box`}>
            <div className={`${sender} title`}>{title}</div>
            {<ReactMarkdown>{content}</ReactMarkdown>}
        </div>
    );
}

export default MessageBox;