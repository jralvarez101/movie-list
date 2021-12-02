import {
  GET_MOVIES,
  ADD_MOVIE,
  DELETE_MOVIE,
  FILTER_MOVIES,
  MOVIE_ERROR,
} from './types';
import axios from 'axios';

// Get movies

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
    });
  }
};

// Delete movie

// Filter movies

// Remove error
