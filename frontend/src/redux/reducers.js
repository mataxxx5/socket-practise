import defaultState from './state';
 const messageReducer = (state = defaultState, action) => {
    switch (action.type) {
        case 'ADD_MESSAGE' :
            return {...state, messages: [state.messages, action.payload]};
        default: 
            return state;
    }
};

export default messageReducer;