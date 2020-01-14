import React, { Component } from "react";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import {  getNBAData } from "../actions/nbaActions";



class NBAfeed extends Component {

 componentDidMount(){
 	this.props.getNBAData();
 	
 }

  render() {
    console.log(this.props);
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

const mapStateToProps = state => ({
  nba: state.nba
});

export default connect(
  mapStateToProps,
  { getNBAData }
)(NBAfeed);