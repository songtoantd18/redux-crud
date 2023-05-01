import { createStore } from "redux";
import todoReducer from "./reducer";
import { combineReducers } from "redux";

const rootReducer = combineReducers({ todoReducer });
const store = createStore(rootReducer);
export default store;
