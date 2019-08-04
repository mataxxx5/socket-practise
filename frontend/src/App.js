import React from 'react';
import { Provider } from 'react-redux'
import Chat from './chat';
import store from './redux';

function App() {
  return (
    <Provider store={store}>
      <Chat/>
    </Provider>
  );
}
export default App;
