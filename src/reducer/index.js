import { combineReducers } from "redux";
import moviesReducer from "../features/movies/moviesSlice";

export default combineReducers({
  movies: moviesReducer,
});