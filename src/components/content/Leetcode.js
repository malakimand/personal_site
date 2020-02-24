import React, { Component } from "react";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import { getAllEntries, deleteEntry } from "../actions/leetcodeActions";


class Leetcode extends Component {

  constructor(props){
    super(props)
    this.delEntry = this.delEntry.bind(this)
  }

  componentDidMount() {
    // fetch leetcode entries
      this.props.getAllEntries(this.props.match.params.page)
      
  }

 delEntry(id){
  this.props.deleteEntry(id);
 }

   



  render() {
    
    
    return (
     <div className="container silver">
      <Link to="/dashboard" className="btn-flat waves-effect">
            <i className="material-icons left">keyboard_backspace</i> Back
      </Link>
     
      <div className="divider"></div>
        <div className="section">
          <h5>Add Leetcode Post</h5>
          <div className="row">
            <div className="col s2">
              
              <Link to="/leetcodeform" style={{ pointerEvents: this.props.auth.isAuthenticated === true ? "auto" : "none"}}>
               <input type="submit" disabled={!this.props.auth.isAuthenticated}  className="btn btn-small waves-effect waves-light orange accent-3"
                 value="CREATE" style={{fontWeight: "bold"}}/>
              </Link>
             
            </div>
            <div className="col s6 offset-s3">
              <i className="blue-grey-text darken-1">{this.props.auth.isAuthenticated === true ? "" : "Log in to add a post"}</i>
            </div>
          </div>
        </div>
        <div className="divider"></div>
        <div className="section">
          <h5>View Leetcode Posts</h5>
          <div className="hide-on-med-and-down">

          {this.props.leetcode.entries.map(entry => 
            <div className="row" key={entry.date}>
              <div className="divider" />
              <div className="card col s7" style={{padding: '1px', borderRadius: '5px'}}>

                <h5 className="container">Leetcode #{entry.question_id}{": "}<i>{entry.question_title}</i></h5>
                <p className="container">by {entry.user} {"      "} on {entry.date.substring(0,10)}</p>
                {entry.updatedAt !== null ? <p className="container">last updated: {entry.updatedAt.substring(0,10)}</p> : ""}
               
              </div>
              <div className="col s1" style={{padding: '1px', margin: "10px"}}>
               <Link className="btn waves-effect z-depth-1 orange accent-3" 
               to={{
                pathname: "/leetcodeEntry",
                state: {
                 data: entry
                }
              }}
               ><b className="center align">View</b></Link>
              </div>

               { this.props.auth.user.username === entry.user ?
              <div className="col s1" style={{padding: '1px', margin: "10px"}}>
               <Link className="btn waves-effect z-depth-1 teal accent-3" 
               to={{
                pathname: "/editleetcodeform",
                state: {
                 data: entry
                }
              }}
               ><b>Edit</b></Link>
              </div>
            : ""}
              { this.props.auth.user.username === entry.user ?
              <div className="container col s1" style={{padding: '1px', margin: "10px 0px 10px 5px"}}>
               <button className="btn waves-effect z-depth-1 red accent-3" 
                onClick={(e) => this.delEntry(entry._id,e)}
               ><i className="material-icons">delete_forever</i></button>
              </div>
            : ""}
            </div>
          )}
        </div> 

        <div className="hide-on-large-only">
        {this.props.leetcode.entries.map(entry => 
            <div className="row" key={entry.date}>
              <div className="divider" />
              <div className="card col s7" style={{padding: '1px', borderRadius: '5px'}}>

                <h5 className="container">Leetcode #{entry.question_id}{": "}<i>{entry.question_title}</i></h5>
                <p className="container">by {entry.user} {"      "} on {entry.date.substring(0,10)}</p>
                {entry.updatedAt !== null ? <p className="container">last updated: {entry.updatedAt.substring(0,10)}</p> : ""}
               
              </div>
              <div className="center align " >
               <Link className="btn-small waves-effect z-depth-1 orange accent-3"  style={{width: '4.5rem', height: '2rem', margin: '2px'}}
               to={{
                pathname: "/leetcodeEntry",
                state: {
                 data: entry
                }
              }}
               ><b className="center align">View</b></Link>
              </div>

               { this.props.auth.user.username === entry.user ?
              <div className="center" >
               <Link className="btn-small waves-effect z-depth-1 teal accent-3"   style={{width: '4.5rem', height: '2rem', margin: '2px'}}
               to={{
                pathname: "/editleetcodeform",
                state: {
                 data: entry
                }
              }}
               ><b>Edit</b></Link>
              </div>
            : ""}
              { this.props.auth.user.username === entry.user ?
              <div className="center align" >
               <button className="btn-small waves-effect z-depth-1 red accent-3"  style={{width: '4.5rem', height: '2rem' , margin: '2px'}}
                onClick={(e) => this.delEntry(entry._id,e)}
               ><i className="material-icons">delete_forever</i></button>
              </div>
            : ""}
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
                  key={1 + i}
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
  { getAllEntries, deleteEntry }
)(Leetcode);