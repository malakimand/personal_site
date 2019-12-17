const Validator = require("validator");
const isEmpty = require("is-empty");

module.exports = function validateLeetcodeInput(data) {
  let errors = {};
// Convert empty fields to an empty string so we can use validator functions
  data.question_id = !isEmpty(data.question_id) ? data.question_id : "";
  data.question_title = !isEmpty(data.question_title) ? data.question_title : "";
  data.answer_code = !isEmpty(data.answer_code) ? data.answer_code : "";
  data.time_complexity = !isEmpty(data.time_complexity) ? data.time_complexity : "";
  data.space_complexity = !isEmpty(data.space_complexity) ? data.space_complexity : "";
  data.program_language = !isEmpty(data.program_language) ? data.program_language : "";
  data.difficulty = !isEmpty(data.difficulty) ? data.difficulty : "";

// id checks
  if (Validator.isEmpty(data.question_id)) {
    errors.question_id = "question_id field is required";
  }


  // id checks
  if (Validator.isEmpty(data.question_id)) {
    errors.question_id = "question_id field is required";
  }
  if(!Validator.isInt(data.question_id, {min: 0, max: 2000})) {
    errors.question_id = "question_id field must be a Number";
  }

  // code checks
  if (Validator.isEmpty(data.answer_code)) {
    errors.answer_code = "answer_code field is required";
  }

// title checks
  if (Validator.isEmpty(data.question_title)) {
    errors.question_title = "question_title field is required";
  }

  // time complexity checks
  if (Validator.isEmpty(data.time_complexity)) {
    errors.time_complexity = "time_complexity field is required";
  }

    // space_complexity checks
  if (Validator.isEmpty(data.space_complexity)) {
    errors.space_complexity = "space_complexity field is required";
  }


    // program_language checks
  if (Validator.isEmpty(data.program_language)) {
    errors.program_language = "program_language field is required";
  }

    // difficulty checks
  if (Validator.isEmpty(data.difficulty)) {
    errors.difficulty = "difficulty field is required";
  }


return {
    errors,
    isValid: isEmpty(errors)
  };
};

