import React from 'react';
import './chat.scss';

const Message = ({text}) => {
    return (
        <div className='sp--chat-feed-message'>
            {text}
        </div>
    );
}

export default Message;