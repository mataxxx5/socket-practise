import {createStore} from 'redux';
import rootReducer from './reducers';
import defaulState from './state';

export default createStore(rootReducer, defaulState, window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__());