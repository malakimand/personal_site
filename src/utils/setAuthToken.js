import axios from "axios";

const setAuthToken = token => {
  if (token) {
    // If token is present then add token to header for every request
    axios.defaults.headers.common["Authorization"] = token;
  } else {
    // otherwise remove auth header
    delete axios.defaults.headers.common["Authorization"];
  }
};

export default setAuthToken;