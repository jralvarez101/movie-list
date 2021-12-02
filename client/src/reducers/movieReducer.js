import { ADD_MOVIE, MOVIE_ERROR, ClEAR_MOVIE_ERROR } from '../actions/types';

const initialState = {
  movies: [],
  error: null,
};

/* eslint import/no-anonymous-default-export: [2, {"allowArrowFunction": true}] */
export default (state = initialState, action) => {
  switch (action.type) {
    case ADD_MOVIE:
      return {
        ...state,
        movies: [...state.movies, action.payload],
      };
    case MOVIE_ERROR:
      return {
        ...state,
        error: action.payload,
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
