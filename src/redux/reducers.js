import { combineReducers } from "redux";
import commonSlice from "./common/commonSlice";
import authSlice from "./auth/authSlice";

const rootReducers = combineReducers({
    Common: commonSlice,
    Auth: authSlice,
});

export default rootReducers;
