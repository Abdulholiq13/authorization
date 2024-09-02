import { combineReducers, legacy_createStore } from "redux";
import blog from "./blog";
import token from "./token";

const reducers = combineReducers({
  blog,
  token,
});

export const store = legacy_createStore(reducers);
