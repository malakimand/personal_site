const express = require('express');
const path = require('path')
const bodyParser = require('body-parser');
const mongoose = require('mongoose');

const cron = require("node-cron");

var cors = require('cors')

var corsOptions = {
  origin: 'http://danielthedeveloper.com',
  optionsSuccessStatus: 200 // some legacy browsers (IE11, various SmartTVs) choke on 204
}




const Author = require('./models/author')

const passport = require("passport");


const users = require("./routes/api/users");
const leetcode = require("./routes/api/leetcode");
const NBA = require("./routes/api/nba");


const app = express();

app.use(cors(corsOptions)) //prod
//app.use(cors()) //dev

app.use(express.static('public'))
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());


const db = require("./config/keys").mongoURI;

mongoose.connect(db, { useNewUrlParser: true })
.then(() => console.log("MongoDB successfully connected"))
  .catch(err => console.log(err));





  cron.schedule("0 30 8 * * *", function() {
  	  require("./tasks/NBA").getNBAdata()
      console.log("running this task every day at 8:30am pst");
     
  });


// Passport middleware
app.use(passport.initialize());
// Passport config
require("./config/passport")(passport);
// Routes
app.use("/api/users", users);
app.use("/api/leetcode", leetcode);
app.use("/api/NBA", NBA);

const port = process.env.PORT || 5000; // process.env.port is deployer's port if you choose to deploy the app there

app.listen(port, () => console.log(`Server up and running on port ${port} !`));




