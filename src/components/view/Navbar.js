import React, { Component } from "react";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import { logoutUser } from "../actions/authActions";

class Navbar extends Component {

   onLogoutClick = e => {
    e.preventDefault();
    this.props.logoutUser();
  };

  render() {
    return (
      <div>
      
      <div className="navbar-fixed" >
        <nav className="z-depth-0" >
          <div className="nav-wrapper blue-grey lighten-4 row">
          <div className="container col s4 push-s8">
            <Link
              to="/dashboard"
              className="brand-logo black-text left-align"
            >
              <i className="material-icons">home</i>
              <span className="hide-on-med-and-down">Daniel The Developer</span>
              <span className="hide-on-large-only hide-on-small-only">Daniel</span>
            </Link>
            </div>

            <div className="col s8 pull-s4">

            {this.props.auth.isAuthenticated === true ? (
            <button
              style={{
                borderRadius: "10px",
                letterSpacing: "1.5px",
                
              }}
              onClick={this.onLogoutClick}
              className="btn btn-medium waves-effect waves-light hoverable red accent-3"
            >
              Logout
            </button>
            ) : ( <div style={{overflow: 'hidden'}}>
                  <Link
                to="/register"
                style={{
                  borderRadius: "3px",
                  letterSpacing: "1.5px"
                }}
                className="btn btn-small waves-effect waves-light hoverable blue accent-3"
              >
                Register
              </Link>
            
              <Link
                to="/login"
                style={{
                  borderRadius: "3px",
                  letterSpacing: "1.5px"
                }}
                className="btn btn-small btn-flat waves-effect white black-text"
              >
                Log In
              </Link>

              </div>)}

          </div>

          </div>
          
        </nav>
      </div>
    </div>
    );
  }
}

const mapStateToProps = state => ({
  auth: state.auth
});

export default connect(
  mapStateToProps,
  { logoutUser }
)(Navbar);