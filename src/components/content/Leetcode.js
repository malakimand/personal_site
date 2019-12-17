import React, { Component } from "react";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import { getAllEntries } from "../actions/leetcodeActions";


class Leetcode extends Component {

  componentDidMount() {
    // fetch leetcode entries
   
      //console.log("1");
      this.props.getAllEntries(this.props.match.params.page)
      
  }



   



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
          {this.props.leetcode.entries.map(entry => 
            <div>
              <div className="divider" />
              <div className="card col s12" style={{padding: '1px', borderRadius: '5px'}}>

                <h5 className="container">Leetcode #{entry.question_id}{": "}<i>{entry.question_title}</i></h5>
                
                <p className="container">by {entry.user} {"      "} on {entry.date.substring(0,10)}</p>
              </div>
            </div>
          )}
        </div>
        <div className="row center-align">
        Page
        {
          <div>
            {
              [...Array(this.props.leetcode.pages)].map((e,i) => {
                  return <b
                  onClick={()=> this.props.getAllEntries(i+1)}
                  className="btn btn-small waves-effect z-depth-1" 
                  style={{ pointerEvents: i+1 === this.props.leetcode.page ? 'none' : 'auto'}}>
                    {i+1}
              </b>
               })
            } 
          </div>
        }
        </div>

     </div>
    );
  }
}

const mapStateToProps = state => ({
  auth: state.auth,
  leetcode: state.leetcode
});

export default connect(
  mapStateToProps,
  { getAllEntries }
)(Leetcode);