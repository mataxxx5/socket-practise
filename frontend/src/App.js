import React from 'react';
import { Provider } from 'react-redux'
import Chat from './chat';
import store from './redux';
import io from 'socket.io-client';

function App() {
  const socket = io();
  return (
    <Provider store={store}>
      <Chat/>
    </Provider>
  );
}
export default App;
