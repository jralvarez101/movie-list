import {
  ADD_MOVIE,
  MOVIE_ERROR,
  ClEAR_MOVIE_ERROR,
  GET_MOVIES,
  CLEAR_MOVIES,
  DELETE_MOVIE,
} from '../actions/types';

const initialState = {
  movies: [],
  error: null,
};

/* eslint import/no-anonymous-default-export: [2, {"allowArrowFunction": true}] */
export default (state = initialState, action) => {
  switch (action.type) {
    case GET_MOVIES:
      return {
        ...state,
        movies: action.payload,
      };
    case ADD_MOVIE:
      return {
        ...state,
        movies: [...state.movies, action.payload],
      };

    case CLEAR_MOVIES:
      return {
        ...state,
        movies: [],
      };
    case MOVIE_ERROR:
      return {
        ...state,
        error: action.payload,
      };
    case DELETE_MOVIE:
      return {
        ...state,
        movies: state.movies.filter((movie) => movie._id !== action.payload),
      };
    case ClEAR_MOVIE_ERROR:
      return {
        ...state,
        error: null,
      };

    default:
      return state;
  }
};
