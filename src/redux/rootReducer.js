import { combineReducers } from "redux";
import MovieReducer from "./Reducer/MovieReducer";

const rootReducer = combineReducers({
  MovieReducer: MovieReducer,
});

export default rootReducer;
