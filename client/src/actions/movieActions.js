import {
  GET_MOVIES,
  CLEAR_MOVIES,
  ADD_MOVIE,
  DELETE_MOVIE,
  MOVIE_ERROR,
  ClEAR_MOVIE_ERROR,
} from './types';
import axios from 'axios';

// Get movies
export const getMovies = () => async (dispatch) => {
  try {
    const res = await axios.get('api/movies');
    dispatch({
      type: GET_MOVIES,
      payload: res.data,
    });
  } catch (err) {
    dispatch({
      type: MOVIE_ERROR,
      payload: err.response.data.message,
    });
  }
};

// Add movie
export const addMovie = (movie) => async (dispatch) => {
  const config = {
    headers: {
      'Content-Type': 'application/json',
    },
  };
  try {
    const res = await axios.post('api/movies', movie, config);
    dispatch({
      type: ADD_MOVIE,
      payload: res.data,
    });
  } catch (err) {
    dispatch({
      type: MOVIE_ERROR,
      payload: err.response.data.msg,
    });
  }
};

// Delete movie

// Clear movie
export const clearMovies = () => (dispatch) => {
  dispatch({
    type: CLEAR_MOVIES,
  });
};

// Remove error
export const clearMovieErrors = () => (dispatch) => {
  dispatch({
    type: ClEAR_MOVIE_ERROR,
  });
};
