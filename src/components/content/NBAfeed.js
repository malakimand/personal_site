import React, { Component } from "react";
import { Link } from "react-router-dom";



class NBAfeed extends Component {

 

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



export default NBAfeed;