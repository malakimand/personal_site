import { combineReducers } from 'redux'

import leetcodeReducer from './leetcodeReducer';
import authReducer from "./authReducer";
import errorReducer from "./errorReducer";

export default combineReducers({
  leetcode: leetcodeReducer,
  auth: authReducer,
  errors: errorReducer
});
