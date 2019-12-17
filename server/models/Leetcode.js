const mongoose = require("mongoose");
const Schema = mongoose.Schema;
// Create Schema
const LeetcodeSchema = new Schema({
  question_id: {
    type: Number,
    required: true
  },
  question_title: {
    type: String,
    required: true
  },
   answer_code: {
    type: String,
    required: true
  },
   time_complexity: {
    type: String,
    required: true
  },
   space_complexity: {
    type: String,
    required: true
  },
   program_language: {
    type: String,
    required: true
  },
   difficulty: {
    type: String,
    required: true
  },
   user: {
    type: String,
    required: true
  },
  date: {
    type: Date,
    default: Date.now
  }
});
module.exports = Leetcode = mongoose.model("leetcode", LeetcodeSchema);

