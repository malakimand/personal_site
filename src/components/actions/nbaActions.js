import axios from "axios";
import {
  FETCH_NBA_DATA
} from "./types";



// get all NBA data
export const getNBAData = () =>  dispatch => {
  axios
  .get("http://danielthedeveloper.com:5000/api/NBA/stats")
    //.get("/api/NBA/stats")
    .then(res => 
      dispatch({
            type: FETCH_NBA_DATA,
            payload: res.data
        })
      )
    .catch(err =>
       console.log(err)
    );
};
  
   





