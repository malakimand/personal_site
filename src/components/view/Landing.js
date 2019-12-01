import React, { Component } from "react";
import { a } from "react-router-dom";

class Landing extends Component {
  render() {
    return (
      <div style={{ height: "75vh" }} className="container valign-wrapper">
        <div className="row">
          <div className="col s12 center-align">
            <h4>
              <p>My personal <b>Site</b> to showcase latest web functionality</p>{" "}
              <span style={{ fontFamily: "monospace", color: "silver", boxShadow: "3px 5px #7777", border: '1px solid' }}>and</span> <p className="flow-text grey-text text-darken-1">keep a repository for 
              leetcode questions and answers</p>
            </h4>
            
            <br />
            <div className="col s6">
              <a
                to="/register"
                style={{
                  width: "140px",
                  borderRadius: "3px",
                  letterSpacing: "1.5px"
                }}
                className="btn btn-large waves-effect waves-light hoverable blue accent-3"
              >
                Register
              </a>
            </div>
            <div className="col s6">
              <a
                to="/login"
                style={{
                  width: "140px",
                  borderRadius: "3px",
                  letterSpacing: "1.5px"
                }}
                className="btn btn-large btn-flat waves-effect white black-text"
              >
                Log In
              </a>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
export default Landing;