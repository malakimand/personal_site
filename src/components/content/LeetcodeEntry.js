import React, {Component} from 'react'
import { Link } from "react-router-dom";

class LeetcodeEntry extends Component {

	render(){
		const {data} = this.props.location.state
		
		return (	
			<div className="container">
				<div>
			        <div className="row">
			          <div className="col s8">
			            <Link to="/leetcode/1" className="btn-flat waves-effect">
			              <i className="material-icons left">keyboard_backspace</i> Back
			            </Link>
			          </div>
			        
			          <div className="card col s11 offset-s1">
			          	<div className="row">
				          <h3 className="center-align">{data.question_title}</h3>
				          <h5 className="center-align">Leetcode #{data.question_id}</h5>
				          <span className=" col s4 offset-s1">Language: {data.program_language}</span>
				          <span className=" col  s4 offset-s3">Time Complexity: {data.time_complexity}</span>
				          <span className=" col s4 offset-s1">Difficulty: {data.difficulty}</span>
				          <span className=" col s4 offset-s3">Space Complexity: {data.space_complexity}</span>


				          <blockquote className="col s10">
				          <pre>{data.answer_code}</pre>
				         
				          </blockquote>

				         
			          	</div>
			          	<div className="row">
			          	  <span className="center-align col s3">By: {data.user}</span>
				          <span className="center-align col s3 offset-s6">Date: {data.date.substring(0,10)}</span>
			          	</div>
			          </div>
			        </div>
			    </div>
			</div>
		)
	}
}
export default LeetcodeEntry;