import {
  FETCH_NBA_DATA
} from "../components/actions/types";
// Initial state
const initialState = {
  standings: {
  	atlantic: [],
  	central: [],
  	southeast: [],
  	northwest: [],
  	pacific: [],
  	southwest: []
  },
  todays_games: [],
  lastUpdatedOn: null
};


// State
export default (state = initialState, action) => {
  switch (action.type) {
    case FETCH_NBA_DATA:
    
      return Object.assign({}, state, {
        standings: {
        	atlantic: action.payload[0].standings[0].atlantic,
  			central: action.payload[0].standings[0].central,
  			southeast: action.payload[0].standings[0].southeast,
  			northwest: action.payload[0].standings[0].northwest,
  			pacific: action.payload[0].standings[0].pacific,
  			southwest: action.payload[0].standings[0].southwest
  	}, 
        todays_games: action.payload[0].todays_games, 
        lastUpdatedOn: action.payload[0].lastUpdatedOn
      })
    
    default:
      return state;
  }
};