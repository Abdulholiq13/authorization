import { combineReducers, legacy_createStore } from "redux";
import blog from "./blog";
import token from "./token";
import profile from "./profile";

const reducers = combineReducers({
  blog,
  token,
  profile,
});

export const store = legacy_createStore(reducers);
