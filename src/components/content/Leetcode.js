import React, { Component } from "react";
import { Link } from "react-router-dom";
import { connect } from "react-redux";


class Leetcode extends Component {


  render() {

    return (
     <div className="container silver">
      <Link to="/dashboard" className="btn-flat waves-effect">
            <i className="material-icons left">keyboard_backspace</i> Back
      </Link>
     
      <div class="divider"></div>
        <div class="section">
          <h5>Add Leetcode Post</h5>
          <div className="row">
            <div className="col s2">
              {}
              <Link to="/leetcodeform" style={{ pointerEvents: this.props.auth.isAuthenticated === true ? "auto" : "none"}}>
               <input type="submit" disabled={!this.props.auth.isAuthenticated} value="Create"  className="btn btn-small waves-effect waves-light orange accent-3" />
              </Link>
             
            </div>
            <div className="col s8">
              <i className="blue-grey-text darken-1">{this.props.auth.isAuthenticated === true ? "" : "Log in to add a post"}</i>
            </div>
          </div>
        </div>
        <div class="divider"></div>
        <div class="section">
          <h5>View Leetcode Posts</h5>
          <p>[]</p>
        </div>
     </div>
    );
  }
}

const mapStateToProps = state => ({
  auth: state.auth
});

export default connect(
  mapStateToProps
)(Leetcode);