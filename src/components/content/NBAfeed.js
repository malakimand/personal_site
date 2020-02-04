import React, { Component } from "react";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import {  getNBAData } from "../actions/nbaActions";



class NBAfeed extends Component {

 componentDidMount(){
 	this.props.getNBAData();
 	
 }

  render() {
    let conferences = ['West', 'East'];
    
    return (
     <div className="container silver">
     	<Link to="/dashboard" className="btn-flat waves-effect">
            <i className="material-icons left">keyboard_backspace</i> Back
	    </Link>

      <div className="divider"></div>

        <div className="section">
          <h5>Today's Games</h5>
          <div className="row">
          {this.props.nba.todays_games.map(game => 
            <div key={game.awayTeam.Name}>
              <div className="card col s3 m4 l4" style={{margin: '5px', padding: '1px', borderRadius: '5px', fontSize: '10px'}}>
                <p><b>{game.awayTeam.Name}</b> at <b>{game.homeTeam.Name}</b></p>
                <p>{game.time} at the {game.location} Stadium</p>

              </div>
              
            </div>
          )}


          </div>
        </div>
        <div className="divider"></div>
        <div className="section">
          <h5>Team Standings</h5>
           <div className="row">
            
            {conferences.map(conference => 
              <div className="col s6" key={conference}>
                
                {conference === 'West' ? 
                <div> 
                <h5 style={{color: '#17408B'}}>{conference}</h5>
                <h6 style={{color: '#17408B'}}>Pacific Division</h6>
                { 
                  this.props.nba.standings.pacific.map(team => 
                   <div className="card col s12 m12 l12" key={team.team.Name} style={{margin: '5px', padding: '1px', borderRadius: '5px', fontSize: '10px'}}>
                      <b>{team.team.Name}</b> Wins: {team.wins['#text']} Losses: {team.losses['#text']}
                   </div> 

                )} 
                  <h6 style={{color: '#17408B'}}>Northwest Division</h6>
                { this.props.nba.standings.northwest.map(team => 
                   <div className="card col s12 m12 l12" key={team.team.Name} style={{margin: '5px', padding: '1px', borderRadius: '5px', fontSize: '10px'}}>
                      <b>{team.team.Name}</b> Wins: {team.wins['#text']} Losses: {team.losses['#text']}
                   </div> 

                )} 
                <h6 style={{color: '#17408B'}}>Southwest Division</h6>
                { this.props.nba.standings.southwest.map(team => 
                   <div className="card col s12 m12 l12" key={team.team.Name} style={{margin: '5px', padding: '1px', borderRadius: '5px', fontSize: '10px'}}>
                     <b>{team.team.Name}</b> Wins: {team.wins['#text']} Losses: {team.losses['#text']}
                   </div> 

                )} 
                </div>
            
           
            : 
            <div> 
            <h5 style={{color: '#C9082A'}} className="right-align">{conference}</h5>
                <h6 style={{color: '#C9082A'}} className="right-align">Atlantic Division</h6>
                { 
                  this.props.nba.standings.atlantic.map(team => 
                   <div className="card col s12 m12 l12 right-align" key={team.team.Name} style={{margin: '5px', padding: '1px', borderRadius: '5px', fontSize: '10px'}}>
                      <b>{team.team.Name}</b> Wins: {team.wins['#text']} Losses: {team.losses['#text']}
                   </div> 

                )} 
                  <h6 style={{color: '#C9082A'}} className="right-align">Central Division</h6>
                { this.props.nba.standings.central.map(team => 
                   <div className="card col s12 m12 l12 right-align" key={team.team.Name} style={{margin: '5px', padding: '1px', borderRadius: '5px', fontSize: '10px'}}>
                      <b>{team.team.Name}</b> Wins: {team.wins['#text']} Losses: {team.losses['#text']}
                   </div> 

                )} 
                <h6 style={{color: '#C9082A'}} className="right-align">Southeast Division</h6>
                { this.props.nba.standings.southeast.map(team => 
                   <div className="card col s12 m12 l12 right-align" key={team.team.Name} style={{margin: '5px', padding: '1px', borderRadius: '5px', fontSize: '10px'}}>
                      <b>{team.team.Name}</b> Wins: {team.wins['#text']} Losses: {team.losses['#text']}
                   </div> 

                )} 
                </div> }
              </div>
              )}
            
            
           </div>
        </div>
      <span> Last updated: {this.props.nba.lastUpdatedOn}. API from MySportsFeed</span>
     </div>

    );
  }
}

const mapStateToProps = state => ({
  nba: state.nba
});

export default connect(
  mapStateToProps,
  { getNBAData }
)(NBAfeed);