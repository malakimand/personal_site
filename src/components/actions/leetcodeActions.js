import axios from "axios";

// Registration
export const createEntry = (leetData, history) => dispatch => {
  axios
    .post("/api/users/register", leetData)
    .then(res => history.push("/leetcode")) // goto leetcode
    .catch(err =>
      dispatch({
        type: GET_ERRORS,
        payload: err.response.data
      })
    );
};