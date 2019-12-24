import React, { Component } from "react";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import { getNBASchedule, getNBAStandings } from "../actions/nbaActions";



class NBAfeed extends Component {

 componentDidMount(){
 	this.props.getNBAStandings();
 	this.props.getNBASchedule();
 	
 }

  render() {
    return (
     <div className="container silver">
     	<Link to="/dashboard" className="btn-flat waves-effect">
            <i className="material-icons left">keyboard_backspace</i> Back
	    </Link>

       NBA Feed Container
     </div>
    );
  }
}



export default connect(
  null,
  { getNBASchedule, getNBAStandings }
)(NBAfeed);