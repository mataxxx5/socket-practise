import React from 'react';
import {connect} from 'react-redux';
import Feed from './feed';
import InputBar from './inputBar';

const Chat = ({messages}) => {
    return (
        <div className='sp--chat'>
            <Feed
                messages={messages}
            />
            <InputBar/>
        </div>
    );
};

export default connect(
    state => ({
        messages: state.messages
    }),
    () => ({})
)(Chat);
