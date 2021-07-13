import { combineReducers } from 'redux';
import posts from './postsReducer';
import auth from './authReducer';
export const reducers = combineReducers({ posts, auth });