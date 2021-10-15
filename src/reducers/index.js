import { combineReducers } from "redux";
import usersReducer from "./usersReducer";
import plantsReducer from "./plantsReducer";

const rootReducer = combineReducers({
  plantState: plantsReducer,
  userState: usersReducer,
});

export default rootReducer;
