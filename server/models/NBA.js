const mongoose = require("mongoose");
const Schema = mongoose.Schema;
// Create Schema
const NBASchema = new Schema({
  standings: Array,
  todays_games: Array,
  lastUpdatedOn: String,
  date: {
    type: Date,
    default: Date.now
  }
});
module.exports = NBA = mongoose.model("nba", NBASchema);