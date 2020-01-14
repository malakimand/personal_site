import {
  FETCH_NBA_DATA
} from "../components/actions/types";
// Initial state
const initialState = {
  standings: [],
  todays_games: [],
  lastUpdatedOn: null
};


// State
export default (state = initialState, action) => {
  switch (action.type) {
    case FETCH_NBA_DATA:
    console.log(action.payload)
      return Object.assign({}, state, {
        standings: action.payload[0].standings, 
        todays_games: action.payload[0].todays_games, 
        lastUpdatedOn: action.payload[0].lastUpdatedOn
      })
    
    default:
      return state;
  }
};