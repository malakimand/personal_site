import {
  FETCH_LEETCODE_ENTRIES,
  DELETE_LEETCODE_ENTRY
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
      return Object.assign({}, state, {
        entries: action.payload.entries, 
        page: action.payload.page, 
        pages: action.payload.pages
      })

    case DELETE_LEETCODE_ENTRY:
      
      const filtered = state.entries.filter(entry => entry._id !== action.payload)
      console.log(filtered)
      return Object.assign({}, state, {
        entries: filtered
      })
    
    default:
      return state;
  }
};