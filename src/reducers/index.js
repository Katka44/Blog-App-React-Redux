import { combineReducers } from "redux";
import postsReducer from "./posts";
import usersReducer from "./users";

export const rootReducer = combineReducers({
  posts: postsReducer,
  users: usersReducer
});

export const getPosts = state => {
	return state.posts;
}

export const getUsers = state => {
	return state.users;
}