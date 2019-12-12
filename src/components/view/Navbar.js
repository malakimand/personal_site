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
      <div className="navbar-fixed">
        <nav className="z-depth-0">
          <div className="nav-wrapper blue-grey lighten-4">
          <div className="left-align">
            <Link
              to="/dashboard"
              style={{
                fontFamily: "monospace"
              }}
              className="col s5 brand-logo center black-text"
            >
              <i className="material-icons">home</i>
              Daniel Malakiman
            </Link>
            </div>
            <div className="right-align container">
            {this.props.auth.isAuthenticated === true ? (
            <button
              style={{

                width: "100px",
                borderRadius: "10px",
                letterSpacing: "1.5px",
                
              }}
              onClick={this.onLogoutClick}
              className="btn btn-medium waves-effect waves-light hoverable red accent-3"
            >
              Logout
            </button>
            ) : ( <div>
                  <Link
                to="/register"
                style={{
                  width: "100px",
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
                  width: "100px",
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