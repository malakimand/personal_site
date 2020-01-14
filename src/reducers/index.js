import { combineReducers } from 'redux'

import leetcodeReducer from './leetcodeReducer';
import nbaReducer from "./nbaReducer";
import authReducer from "./authReducer";
import errorReducer from "./errorReducer";

export default combineReducers({
  nba: nbaReducer,
  leetcode: leetcodeReducer,
  auth: authReducer,
  errors: errorReducer
});
