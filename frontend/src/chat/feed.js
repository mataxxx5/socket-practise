import React from 'react';
import './chat.scss';
import Message from './message';

export default ({messages}) => {
    return (
        <div className='sp--chat-feed-container'>
            {messages.map(({text, user}, i) => (
            <div className='sp--chat-feed-seperator'>
                <Message text={text} user={user} key={i}/>
            </div>
            ))}
        </div>
    );
};
