import {
  FETCH_LEETCODE_ENTRIES
} from "../components/actions/types";
// Initial state
const initialState = {
  entries: [],
  page: 1,
  pages: 1
};



// State
export default (state = initialState, action) => {
  switch (action.type) {
    case FETCH_LEETCODE_ENTRIES:
      console.log(action.payload)
      return Object.assign({}, state, {entries: action.payload.entries, 
        page: action.payload.page, 
        pages: action.payload.pages
      }) 
      
   
      
    default:
      return state;
  }
};