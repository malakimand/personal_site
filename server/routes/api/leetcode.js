const express = require("express");
const router = express.Router();


// Load input validation
const validateLeetcodeInput = require("../../validation/leetcode");

// Load User model
const Leetcode = require("../../models/Leetcode");

// @route POST api/leetcode/register
// @desc Register leetcode post
// @access Public
router.post("/register", (req, res) => {
  // Form validation
const { errors, isValid } = validateLeetcodeInput(req.body);
// Check validation
  if (!isValid) {
    return res.status(400).json(errors);
  }

  const newLeetcode = new Leetcode({
      question_id: req.body.question_id,
      question_title: req.body.question_title,
      answer_code: req.body.answer_code,
      time_complexity: req.body.time_complexity,
      space_complexity: req.body.space_complexity,
      program_language: req.body.program_language,
      difficulty: req.body.difficulty,
      user: req.body.user
    });

  newLeetcode
    .save()
    .then(leetcode => res.json(leetcode))
    .catch(err => console.log(err));
    
  });




// @route GET api/leetcode/entries
// @desc get all leetcode posts
// @access Public
router.get("/entries/:page", (req, res) => {
        const page = Math.max(1 ,req.params.page)
        const resPerPage = 3;

        

        Leetcode.find({})
        .skip((resPerPage * page) - resPerPage)
        .limit(resPerPage)
        .exec(function(err, result){
          Leetcode.estimatedDocumentCount().exec(function(err, count) {
            var payload = {
              entries: result,
              page: page,
              pages: Math.ceil(count/resPerPage)
            }
            console.log(payload)
            return res.json(payload)
          })
        })

        
       
    })



module.exports = router;