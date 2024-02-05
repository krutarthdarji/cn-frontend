import { combineReducers } from "redux";
import globalReducer from "./global/global.reducer";
const rootReducer = combineReducers({
  global: globalReducer,
});

export default rootReducer;
