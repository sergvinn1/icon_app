// src/redux/actions/userActions.js
export const loginUser = (userData) => ({
    type: 'LOGIN_USER',
    payload: userData,
  });
  
  export const registerUser = (userData) => ({
    type: 'REGISTER_USER',
    payload: userData,
  });
  
  export const logoutUser = () => ({
    type: 'LOGOUT_USER',
  });
  