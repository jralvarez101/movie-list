import {
  REGISTER_SUCCESS,
  REGISTER_FAIL,
  USER_LOADED,
  AUTH_ERROR,
  LOGIN_SUCCESS,
  LOGIN_FAIL,
  LOGOUT,
  CLEAR_ERRORS,
} from './types';
import axios from 'axios';
import setAuthToken from '../utils/setAuthToken';
import toastAlert from '../utils/toastAlert';

// Load User ---------------------------------------------------------
export const loadUser = () => async (dispatch) => {
  //set global header because this is a PRIVATE ROUTE we imported this section
  if (localStorage.token) {
    setAuthToken(localStorage.token);
  }
  try {
    const res = await axios.get('/api/auth');
    dispatch({
      type: USER_LOADED,
      payload: res.data,
    });
  } catch (err) {
    dispatch({
      type: AUTH_ERROR,
      payload: err.response.data.message,
    });
  }
};

// Register User -------------------------------------------------------
export const register = (formData) => async (dispatch) => {
  const config = {
    // set headers
    headers: {
      'content-type': 'application/json',
    },
  };
  try {
    // makes post request to api/users - The response will be the token generated by the post route in routes folder
    const res = await axios.post('/api/users', formData, config);
    dispatch({
      type: REGISTER_SUCCESS,

      payload: res.data,
    });

    dispatch(loadUser());

    toastAlert();
  } catch (err) {
    // If there is an error then it will respond with the error generated by the post route
    dispatch({
      type: REGISTER_FAIL,

      payload: err.response.data.msg,
    });
  }
};

// Login User----------------------------------------
export const login = (formData) => async (dispatch) => {
  const config = {
    // set headers
    headers: {
      'content-type': 'application/json',
    },
  };
  try {
    // makes post request to api/users - The response will be the token generated by the post route in routes folder
    const res = await axios.post('/api/auth', formData, config);
    dispatch({
      type: LOGIN_SUCCESS,
      payload: res.data,
    });

    dispatch(loadUser());
  } catch (err) {
    // If there is an error then it will respond with the error generated by the post route
    dispatch({
      type: LOGIN_FAIL,
      payload: err.response.data.msg,
    });
  }
};

// logout User ------------------------------------
export const logout = () => (dispatch) => {
  dispatch({
    type: LOGOUT,
  });
};

// Clear error-------------------------------------
export const clearErrors = () => (dispatch) => {
  dispatch({
    type: CLEAR_ERRORS,
  });
};
