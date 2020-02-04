import React, { Component } from "react";


class Landing extends Component {
  render() {
    return (
      <div style={{ height: "75vh" }} className="container valign-wrapper">
        <div className="card-panel green lighten-3  ">
          <div className="col s12 center-align">
            <h4>
              <p>My personal <b>Web Application</b> to showcase the latest web functionality I've picked up over the years</p>{" "}
              <span className="z-depth-5 btn-floating pulse" style={{  fontFamily: "lobster", color: "white",background: "purple", border: '2px solid', borderRadius: '30px' }}>and</span> <p className="flow-text grey-text text-darken-1">
              host content related to some of my hobbies</p>
            </h4>
            <p style={{ fontSize: '15px'}} className="flow-text black-text text-darken-1">
              Website made with MERN stack, uses JWT, and more...
            </p>
            <br />
            </div>
        </div>
      </div>
    );
  }
}
export default Landing;