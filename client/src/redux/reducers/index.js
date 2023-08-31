import { combineReducers } from "redux";
import authReducer from "./AuthReducer";
import { errorsReducer } from './errorsReducer';
import profileReducer from "./profileReducer";


export default combineReducers({
  auth: authReducer,
  errors: errorsReducer,
  profiles: profileReducer,
});



