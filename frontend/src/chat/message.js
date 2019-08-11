import React from 'react';
import './chat.scss';

const Message = ({text, user}) => {
    return (
        <div className='sp--chat-feed-message'>
            {user + ' : ' + text}
        </div>
    );
}

export default Message;