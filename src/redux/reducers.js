import { combineReducers } from "redux";
import authSlice from "./auth/authSlice";

const rootReducers = combineReducers({
  Auth: authSlice,
});

export default rootReducers;
