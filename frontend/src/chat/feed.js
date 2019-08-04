import React from 'react';
import './chat.scss';
import Message from './message';

export default ({messages}) => {
    return (
        <div className='sp--chat-feed-container'>
            {messages.map(message => (
            <div className='sp--chat-feed-seperator'>
                <Message text={message}/>
            </div>
            ))}
        </div>
    );
};