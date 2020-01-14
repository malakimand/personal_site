const express = require("express");
const router = express.Router();




// Load User model
const NBA = require("../../models/NBA");






// @route GET api/nba/entries
// @desc get all leetcode posts
// @access Public
router.get("/stats", (req, res) => {
    

        NBA.find({})
        .sort({'date': -1})
        .limit(1)
        .exec(function(err, result){

          return res.json(result);
        }) 
    })






module.exports = router;