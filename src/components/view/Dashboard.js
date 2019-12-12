import React, { Component } from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { Link } from "react-router-dom";


class Dashboard extends Component {
 

render() {
    const { user } = this.props.auth;
return (

    <div>
      <div style={{ height: "60vh" }} className="container valign-wrapper">
        <div className="row">
          <div className="col s12 center-align">
            <h4>
              <b>Hey there,</b> {user.username.split(" ")}
              <p className="flow-text grey-text text-darken-1">
                Check out some of the content below 
              </p>
            </h4>
          </div>
        </div>
      </div>
      <div style={{ height: "600px" }} className="row " >

        <div className="col s4" >
          <div className="card-panel grey lighten-4 z-depth-1">
            <div className = "valign-wrapper">
              <i className="material-icons md-48">sports_basketball</i> 
              <h4 className = "container "><b>NBA Feed </b></h4>
              <Link to="/nba" className="btn waves-effect z-depth-3">
               Explore
            </Link>
            </div>
          </div>
        </div>
        <div className="col s4">
         <div className="card-panel grey lighten-4 z-depth-1">
          <div className = "valign-wrapper">
              <i className="material-icons md-48">code</i> 
              <h4 className = "container "><b>Leetcode</b></h4>
              <Link to="/leetcode" className="btn waves-effect z-depth-3">
               Explore
            </Link>
            </div>
         </div>
        </div>
        <div className="col s4">
          <div className="card-panel grey lighten-4 z-depth-1">
            <div className = "valign-wrapper">
              <i className="material-icons md-48">person</i> 
              <h4 className = "container "><b>About Me</b></h4>
              <Link to="/aboutme" className="btn waves-effect z-depth-3">
               Explore
            </Link>
            </div>
          </div>
        </div>

     
      </div>
     </div>
    );
  }
}

Dashboard.propTypes = {
  auth: PropTypes.object.isRequired
};

const mapStateToProps = state => ({
  auth: state.auth
});

export default connect(mapStateToProps)(Dashboard);