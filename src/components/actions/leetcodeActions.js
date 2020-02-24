import axios from "axios";

import {
  GET_ERRORS,
  FETCH_LEETCODE_ENTRIES,
  DELETE_LEETCODE_ENTRY
} from "./types";

// Registration
export const createEntry = (leetData, history) => dispatch => {
  axios
    //.post("http://danielthedeveloper.com:5000/api/leetcode/register", leetData)
    .post("/api/leetcode/register", leetData)
    .then(res => history.push("/leetcode/1")) // goto leetcode
    .catch(err =>
      dispatch({
        type: GET_ERRORS,
        payload: err.response.data
      })
    );
};

// get all entries until page limit
export const getAllEntries = (page) =>  dispatch => {
	axios
		//.get(`http://danielthedeveloper.com:5000/api/leetcode/entries/${page}`)
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

// delete an entry
export const deleteEntry = (id) =>  dispatch => {

	axios
		//.delete("http://danielthedeveloper.com:5000/api/leetcode/entries", {params: { 'id': `${id}` }})
    .delete("/api/leetcode/entries", {params: { 'id': `${id}` }})
		.then(res => 
			dispatch({
            type: DELETE_LEETCODE_ENTRY,
            payload: id
        }))
		.catch(err =>
	     console.log(err)
    );
};

// Update/Edit an entry
export const updateEntry = (leetData, history) => dispatch => {
  axios
    //.put("http://danielthedeveloper.com:5000/api/leetcode/entries", leetData)
    .put("/api/leetcode/entries", leetData)
    .then(res => history.push("/leetcode/1")) // goto leetcode
    .catch(err =>
      dispatch({
        type: GET_ERRORS,
        payload: err.response.data
      })
    );
};