import { combineReducers } from 'redux';
import alert from './alert';
import auth from './auth';
import quiz from './quiz'

export default combineReducers({
  alert,
  auth,
  quiz
});