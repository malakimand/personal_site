import React, { Component } from "react";
import { Link } from "react-router-dom";



class Aboutme extends Component {



	render() {
		return (
			<div className="container">
			<Link to="/dashboard" className="btn-flat waves-effect">
              <i className="material-icons left">keyboard_backspace</i> Back
            </Link>
				
				<div class="section grey lighten-4"  style={{ borderRadius: '20px'}}>
					
					<div className="row" style={{padding: '0px 0px 0px 20px'}}>
						<h5>About Me</h5>
						<div className="col s4">
							<img style={{height: '100px'}} src="/files/me.jpeg" alt="" className="circle responsive-img"/>
						</div>
						<div className="col s8">
							<p>I'm a motivated Software Engineer with a few years of experience.<br/>
							Web Development has always interested me; I created this site with the knowledge I have picked up from work, school, and my mentorship. <br/>
							Always excited to learn more about the latest technologies.</p>
						</div>
					</div>
				</div>
				
				<div style={{ borderRadius: '20px', color: '#616161'}} class="section grey lighten-2">
					
					<div className="row" style={{padding: '0px 0px 0px 20px'}}>
					<h5>This Project</h5>
						<div className="col s4">
							<i style={{fontSize: '90px'}} className="material-icons">devices_other</i>
						</div>
						<div className="col s8">
							<p>Site features ...</p>
						</div>
					</div>
				</div>
				
				<div class="section grey white-text"  style={{ borderRadius: '20px'}}>
					
					<div className="row" style={{padding: '0px 0px 0px 20px'}}>
					<h5>My Resume</h5>
						<div className="col s4">
							<i style={{fontSize: '90px'}} className="material-icons">file_copy</i>
						</div>
						<div className="col s8">
							<p>Click to download resume</p>
							<Link className="btn btn-small waves-effect waves-light hoverable blue accent-3" to="/files/resume.docx" target="_blank" download>Download</Link>
						</div>
					</div>
					
				</div>

			</div>
			);
		}
	}



	export default Aboutme;