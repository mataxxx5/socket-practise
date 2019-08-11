export const addMessage = (message) => ({
    type: 'ADD_MESSAGE',
    payload: message
});

export const setUser = (userName) => ({
  type: 'SET_USER',
  payload: userName
});
