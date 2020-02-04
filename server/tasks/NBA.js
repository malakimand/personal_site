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
	let nbaData = {}
	let todays_games = []
	//append to a string the date format in YYYYMMDD format
	var dateparam = testtime.getFullYear().toString() + 
	(1+testtime.getMonth() < 10 ? '0'+(1+testtime.getMonth()).toString() : (1+testtime.getMonth()).toString()) +
	(testtime.getDate() < 10 ? '0'+testtime.getDate().toString() : testtime.getDate());

	//fetch daily games
	axios.get('https://api.mysportsfeeds.com/v1.0/pull/nba/2019-2020-regular/daily_game_schedule.json?fordate='+dateparam, config)
  	 .then((games) => {
  	 	const result = games.data.dailygameschedule.gameentry;

  	 	//nested fetches. this one for team standings
	  	axios.get('https://api.mysportsfeeds.com/v1.0/pull/nba/2019-2020-regular/overall_team_standings.json?division=atlantic', config)
		.then( (atlantic) => {
 			
 			//filter data from team standings
			 const filteredAtlantic = atlantic.data.overallteamstandings.teamstandingsentry.map(obj => {
			 	const data = {
			 		'team': obj.team,
			 		'rank': obj.rank,
			 		'wins': obj.stats.Wins,
			 		'losses': obj.stats.Losses,
			 		'gamesBack': obj.stats.GamesBack
			 	}
			 	 return data
			 })

		axios.get('https://api.mysportsfeeds.com/v1.0/pull/nba/2019-2020-regular/overall_team_standings.json?division=central', config)
		.then( (central) => {
 			
 			//filter data from team standings
			 const filteredCentral = central.data.overallteamstandings.teamstandingsentry.map(obj => {
			 	const data = {
			 		'team': obj.team,
			 		'rank': obj.rank,
			 		'wins': obj.stats.Wins,
			 		'losses': obj.stats.Losses,
			 		'gamesBack': obj.stats.GamesBack
			 	}
			 	 return data
			 })

		axios.get('https://api.mysportsfeeds.com/v1.0/pull/nba/2019-2020-regular/overall_team_standings.json?division=southeast', config)
		.then( (southeast) => {
 			
 			//filter data from team standings
			 const filteredSoutheast = southeast.data.overallteamstandings.teamstandingsentry.map(obj => {
			 	const data = {
			 		'team': obj.team,
			 		'rank': obj.rank,
			 		'wins': obj.stats.Wins,
			 		'losses': obj.stats.Losses,
			 		'gamesBack': obj.stats.GamesBack
			 	}
			 	 return data
			 })

		axios.get('https://api.mysportsfeeds.com/v1.0/pull/nba/2019-2020-regular/overall_team_standings.json?division=northwest', config)
		.then( (northwest) => {
 			
 			//filter data from team standings
			 const filteredNorthwest = northwest.data.overallteamstandings.teamstandingsentry.map(obj => {
			 	const data = {
			 		'team': obj.team,
			 		'rank': obj.rank,
			 		'wins': obj.stats.Wins,
			 		'losses': obj.stats.Losses,
			 		'gamesBack': obj.stats.GamesBack
			 	}
			 	 return data
			 })

		axios.get('https://api.mysportsfeeds.com/v1.0/pull/nba/2019-2020-regular/overall_team_standings.json?division=pacific', config)
		.then( (pacific) => {
 			
 			//filter data from team standings
			 const filteredPacific = pacific.data.overallteamstandings.teamstandingsentry.map(obj => {
			 	const data = {
			 		'team': obj.team,
			 		'rank': obj.rank,
			 		'wins': obj.stats.Wins,
			 		'losses': obj.stats.Losses,
			 		'gamesBack': obj.stats.GamesBack
			 	}
			 	 return data
			 })

		axios.get('https://api.mysportsfeeds.com/v1.0/pull/nba/2019-2020-regular/overall_team_standings.json?division=southwest', config)
		.then( (southwest) => {
 			
 			//filter data from team standings
			 const filteredSouthwest = southwest.data.overallteamstandings.teamstandingsentry.map(obj => {
			 	const data = {
			 		'team': obj.team,
			 		'rank': obj.rank,
			 		'wins': obj.stats.Wins,
			 		'losses': obj.stats.Losses,
			 		'gamesBack': obj.stats.GamesBack
			 	}
			 	 return data
			 })
			 	
			  //put data i want into an object
			  const payload = {
			  	'lastUpdatedOn': games.data.dailygameschedule.lastUpdatedOn,
			  	'todays_games': games.data.dailygameschedule.gameentry,
			  	'standings': {
			  		'atlantic': filteredAtlantic,
			  		'central': filteredCentral,
			  		'southeast': filteredSoutheast,
			  		'northwest': filteredNorthwest,
			  		'pacific': filteredPacific,
			  		'southwest': filteredSouthwest
			  	}

			  }
			  //console.log(payload.standings)

			//save object to db
			const NBApost = new NBA(payload);
			  NBApost
			  .save()
			  .catch(err => console.log(err));
		})
		})
		})
		})
		})
  		})
		})
  	

  
  	 	/**
  	 	 **/

	return 1
}


module.exports.getNBAdata = getNBAdata;