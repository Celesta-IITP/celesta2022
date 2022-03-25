import {combineReducers} from 'redux';
import ErrorReducer from './errorreducer';
import AuthReducer from './authReducer'

export default combineReducers({
  error: ErrorReducer,
  auth:AuthReducer
});
