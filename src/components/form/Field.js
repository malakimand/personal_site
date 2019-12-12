import React, { Component } from "react";

class Field extends Component {

	render(){
		return(
			<div>
				{this.props.input === "input" ? (
					<div className="input-field col s3">
                <input
                  onChange={this.props.onChange}
                  value={this.props.value}
                  error={this.props.error}
                  id={this.props.id}
                  type={this.props.type}
                  className={this.props.className}
                />
                <label htmlFor={this.props.id}>{this.props.id}</label>
                <span className="red-text">{this.props.error}</span>
             </div> ) : 
				(<div className="input-field col s12">
                <textarea
                  onChange={this.props.onChange}
                  value={this.props.value}
                  error={this.props.error}
                  id={this.props.id}
                  type={this.props.type}
                  className={this.props.className}
                />
                <label htmlFor={this.props.id}>{this.props.id}</label>
                <span className="red-text">{this.props.error}</span>
             </div> )
			}
            </div>
		)
	}



	}

export default Field;