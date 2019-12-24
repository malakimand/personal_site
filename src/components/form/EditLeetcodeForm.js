import React, { Component } from "react";
import { Link, withRouter } from "react-router-dom";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { updateEntry } from "../actions/leetcodeActions";
import classnames from "classnames";
import Field from "./Field";
//import Leetcode from "../content/Leetcode";

class EditLeetCodeForm extends Component {
  constructor() {
    super();

    this.state = {
      question_id: "",
      question_title: "",
      answer_code: "",
      time_complexity: "",
      space_complexity: "",
      program_language: "",
      difficulty: "",
      errors: {}
    };
  }

  componentDidMount(){
    const {data} = this.props.location.state
    //console.log(data)
    this.setState({
      question_id: data.question_id,
      question_title: data.question_title,
      program_language: data.program_language,
      difficulty: data.difficulty,
      answer_code: data.answer_code,
      time_complexity: data.time_complexity,
      space_complexity: data.space_complexity
    })
  }



componentWillReceiveProps(nextProps) {
    if (nextProps.errors) {
      this.setState({
        errors: nextProps.errors
      });
    }
  }

onChange = e => {
    this.setState({ [e.target.id]: e.target.value });
  };

onSubmit = e => {
    e.preventDefault();
    
    const updatedLeetcode = {
      entry_id: this.props.location.state.data._id,
      question_id: this.state.question_id,
      question_title: this.state.question_title,
      answer_code: this.state.answer_code,
      time_complexity: this.state.time_complexity,
      space_complexity: this.state.space_complexity,
      program_language: this.state.program_language,
      difficulty: this.state.difficulty,
      user: this.props.auth.user.username
    };
   
    
    this.props.updateEntry(updatedLeetcode, this.props.history); 
  };

render() {
    
    const { errors } = this.state;

return (
      <div className="container">
        <div className="row">
          <div className="col s8 offset-s2">
            <Link to="/leetcode/1" className="btn-flat waves-effect">
              <i className="material-icons left">keyboard_backspace</i> Back
            </Link>
            <div className="col s12" style={{ paddingLeft: "11.250px" }}>
              <h3>
                <b>Edit Leetcode Entry</b>
              </h3>
            </div>
            <form noValidate onSubmit={this.onSubmit}>
              
                <Field
                  input="input"
                  onChange={this.onChange}
                  value={this.state.question_id}
                  error={errors.question_id}
                  id="question_id"
                  type="text"
                  className={classnames("", {
                    invalid: errors.question_id
                  })}
                />

                <Field
                  input="input"
                  onChange={this.onChange}
                  value={this.state.question_title}
                  error={errors.question_title}
                  id="question_title"
                  type="text"
                  className={classnames("", {
                    invalid: errors.question_title
                  })}
                />

                <Field
                  input="input"
                  onChange={this.onChange}
                  value={this.state.program_language}
                  error={errors.program_language}
                  id="program_language"
                  type="text"
                  className={classnames("", {
                    invalid: errors.program_language
                  })}
                />

                <Field
                  input="input"
                  onChange={this.onChange}
                  value={this.state.difficulty}
                  error={errors.difficulty}
                  id="difficulty"
                  type="text"
                  className={classnames("", {
                    invalid: errors.difficulty
                  })}
                />

                <Field
                  input="textarea"
                  onChange={this.onChange}
                  value={this.state.answer_code}
                  error={errors.answer_code}
                  id="answer_code"
                  type="text"
                  className={classnames("", {
                    invalid: errors.answer_code
                  }, "materialize-textarea")}
                />

              

                 <Field
                  input="input"
                  onChange={this.onChange}
                  value={this.state.time_complexity}
                  error={errors.time_complexity}
                  id="time_complexity"
                  type="text"
                  className={classnames("", {
                    invalid: errors.time_complexity
                  })}
                />
               
                <Field
                  input="input"
                  onChange={this.onChange}
                  value={this.state.space_complexity}
                  error={errors.space_complexity}
                  id="space_complexity"
                  type="text"
                  className={classnames("", {
                    invalid: errors.space_complexity
                  })}
                />


              <div className="col s12" style={{ paddingLeft: "11.250px" }}>
                <button
                  style={{
                    width: "150px",
                    borderRadius: "3px",
                    letterSpacing: "1.5px",
                    marginTop: "1rem"
                  }}
                  type="submit"
                  className="btn btn-large waves-effect waves-light hoverable blue accent-3"
                >
                  Confirm
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    );
  }
}

const mapStateToProps = state => ({
  auth: state.auth,
  errors: state.errors
});
export default connect(
  mapStateToProps,
  { updateEntry }
)(withRouter(EditLeetCodeForm));