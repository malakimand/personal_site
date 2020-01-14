const axios = require('axios');

// Load User model
const NBA = require("../models/NBA");

//configure header for api call
var config = {

  headers: { 'Authorization': require("../config/keys").NBAkey,
  'Content-Type': 'application/json' }
};





 function getNBAdata(){

 	const testtime = new Date();
	
	//append to a string the date format in YYYYMMDD format
	var dateparam = testtime.getFullYear().toString() + 
	(1+testtime.getMonth() < 10 ? '0'+(1+testtime.getMonth()).toString() : (1+testtime.getMonth()).toString()) +
	(testtime.getDate() < 10 ? '0'+testtime.getDate().toString() : testtime.getDate());


	axios.get('https://api.mysportsfeeds.com/v1.0/pull/nba/2019-2020-regular/daily_game_schedule.json?fordate='+dateparam, config)
  	 .then((games) => {
  	 	
  	 	

	  	axios.get('https://api.mysportsfeeds.com/v1.0/pull/nba/2019-2020-regular/overall_team_standings.json', config)
		.then( (standings) => {
 
			 const filteredStandings = standings.data.overallteamstandings.teamstandingsentry.map(obj => {
			 	
			 	const data = {
			 		'team': obj.team,
			 		'rank': obj.rank,
			 		'wins': obj.stats.Wins,
			 		'losses': obj.stats.Losses,
			 		'gamesBack': obj.stats.GamesBack
			 	}
			 	 return data
			 })
			 	//console.log(filtered)
			  //save data
			  const payload = {
			  	'lastUpdatedOn': games.data.dailygameschedule.lastUpdatedOn,
			  	'todays_games': games.data.dailygameschedule.gameentry,
			  	'standings': filteredStandings

			  }
			
			const NBApost = new NBA(payload);
			  NBApost
			  .save()
			  .catch(err => console.log(err));
		})
		


  		
	 })


		
	

	return 1
}

module.exports.getNBAdata = getNBAdata;