import axios from "axios";

import {
  GET_ERRORS,
  FETCH_LEETCODE_ENTRIES
} from "./types";

// Registration
export const createEntry = (leetData, history) => dispatch => {
  axios
    .post("/api/leetcode/register", leetData)
    .then(res => history.push("/leetcode")) // goto leetcode
    .catch(err =>
      dispatch({
        type: GET_ERRORS,
        payload: err.response.data
      })
    );
};

// get all entries
export const getAllEntries = (page) =>  dispatch => {
	axios
		.get(`/api/leetcode/entries/${page}`)
		.then(res => 
			dispatch({
            type: FETCH_LEETCODE_ENTRIES,
            payload: res.data
        }))
		.catch(err =>
	     console.log(err)
    );
};