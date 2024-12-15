// src/redux/store.js
import { createStore, combineReducers } from 'redux';
import userReducer from './reducers/userReducer';
import iconReducer from './reducers/iconReducer';

const rootReducer = combineReducers({
  user: userReducer,
  icons: iconReducer,
});

const store = createStore(rootReducer);

export default store;
