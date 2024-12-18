// src/redux/reducers/userReducer.js
const initialState = {
    user: null,
  };
  
  const userReducer = (state = initialState, action) => {
    switch (action.type) {
      case 'LOGIN_USER':
        return { ...state, user: action.payload };
      case 'REGISTER_USER':
        return { ...state, user: action.payload };
      case 'LOGOUT_USER':
        return { ...state, user: null };
      default:
        return state;
    }
  };
  
  export default userReducer;
  