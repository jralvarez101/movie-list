import { combineReducers } from 'redux';
import movieReducer from './movieReducer';
import watchedMovieReducer from './watchedMovieReducer';
import authReducer from './authReducer';

export default combineReducers({
  movie: movieReducer,
  watchedMovie: watchedMovieReducer,
  auth: authReducer,
});
