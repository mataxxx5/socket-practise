import React, {useState} from 'react'
import {connect} from 'react-redux';
import {addMessage} from '../redux/actions';

const InputBar = ({sendMessage, user}) => {
    let [userMessage, setUserMessage] = useState("");

    const postMessage = () => {
      if (userMessage !== "")
        sendMessage({
          user,
          text: userMessage
        });
      setUserMessage("");
    }
    const textChange = (text) => {
        setUserMessage(text);
    }
    return (
        <div className = 'sp--chat-input-bar'>
            <input
                className = 'sp--chat-input-message-box'
                placeholder = 'Please type your message here...'
                value = {userMessage}
                onInput = { e => textChange(e.target.value)}
            />
            <button
                className = 'sp--chat-input-message-send-button'
                onClick = {postMessage}
            >
                <span>Send</span>
            </button>
        </div>
    )
};

export default connect(
    state => ({
      user: state.user
    }),
    dispatch => ({
        sendMessage: message =>
          dispatch(addMessage(message))
    })
    )(InputBar);