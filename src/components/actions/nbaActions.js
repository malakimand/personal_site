import axios from "axios";
import { key } from "../api-keys/nbaKey";

var config = {

  headers: { 'Authorization': key,
  'Content-Type': 'application/json' }
};

//get daily schedule from MY SPORTS FEEDS
export const getNBASchedule  = dispatch => {
	axios.get('https://api.mysportsfeeds.com/v1.0/pull/nba/2019-2020-regular/daily_game_schedule.json?fordate=20191220', config)
  .then((response) => {
  	console.log(response.data);
})
  
	
};

//get daily schedule from MY SPORTS FEEDS
export const getNBAStandings  = dispatch => {
	axios.get('https://api.mysportsfeeds.com/v1.0/pull/nba/2019-2020-regular/overall_team_standings.json', config)
  .then((response) => {
  	console.log(response.data);
})
  
	
};




