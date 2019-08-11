import defaultState from './state';
import { combineReducers } from 'redux';

const messageReducer = (state = defaultState, action) => {
    switch (action.type) {
        case 'ADD_MESSAGE' :
            return {
              ...state,
              messages: [
                ...state.messages,
                action.payload
              ]
            };
        default:
            return state;
    }
};

const userReducer = (state = defaultState, action) => {
  switch (action.type) {
      case 'SET_USER' :
          return {
            ...state,
            user: action.payload
          };
      default:
          return state;
  }
};

const roomReducer = (state = defaultState, action) => {
  switch (action.type) {
    case "SET_ROOM" :
      return {
        ...state,
        room: action.payload
      }
    default:
      return state;
  }
}

// export default combineReducers({messageReducer, userReducer});
export default messageReducer;