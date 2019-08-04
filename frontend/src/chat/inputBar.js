import React, {useState} from 'react'
import {connect} from 'react-redux';
import {addMessage} from '../redux/actions';

const InputBar = ({sendMessage}) => {
    let [userMessage, setUserMessage] = useState("");    
    
    const postMessage = () => {
        sendMessage(userMessage);
    }
    const textChange = (text) => {
        console.log('text: ', text);
        setUserMessage(text);
    }
    return (
        <div className = 'sp--chat-input-bar'>
            <input 
                className = 'sp--chat-input-message-box'
                placeholder = 'Please type your message here...'
                onInput = { e => textChange(e)}
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
    () => ({}),
    dispatch => ({
        sendMessage: message => {
            console.log('message: ', message);
            dispatch(addMessage(message))
        }
    })
    )(InputBar);