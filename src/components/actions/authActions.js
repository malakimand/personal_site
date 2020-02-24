import axios from "axios";
import setAuthToken from "../../utils/setAuthToken";
import jwt_decode from "jwt-decode";

import {
  GET_ERRORS,
  SET_CURRENT_USER,
  USER_LOADING
} from "./types";

// Registration
export const registerUser = (userData, history) => dispatch => {
  axios
    //.post("http://danielthedeveloper.com:5000/api/users/register", userData) // prod
    .post("/api/users/register", userData)
    .then(res => history.push("/login")) // goto login
    .catch(err =>
      dispatch({
        type: GET_ERRORS,
        payload: err.response.data
      })
    );
};

// Login / Get Token
export const loginUser = userData => dispatch => {
  axios
    //.post("http://danielthedeveloper.com:5000/api/users/login", userData) // prod
    .post("/api/users/login", userData) // dev
    .then(res => {
      // Add token to localStorage
      const { token } = res.data;
      localStorage.setItem("jwtToken", token);
      // Add token to Auth header
      setAuthToken(token);
      // Get user data from decoding token
      const decoded = jwt_decode(token);
      // dispatch user data as current user
      dispatch(setCurrentUser(decoded));
    })
    .catch(err =>
      dispatch({
        type: GET_ERRORS,
        payload: err.response.data
      })
    );
};

// Send user data to reducer
export const setCurrentUser = decoded => {
  return {
    type: SET_CURRENT_USER,
    payload: decoded
  };
};

// Loading for user
export const setUserLoading = () => {
  return {
    type: USER_LOADING
  };
};

// User log out
export const logoutUser = () => dispatch => {
  // Remove token from local storage
  localStorage.removeItem("jwtToken");
  // Remove auth header for future requests
  setAuthToken(false);
  // Set current user to empty object {} which will set isAuthenticated to false
  dispatch(setCurrentUser({}));
};