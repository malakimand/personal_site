const express = require('express');
const path = require('path')
const bodyParser = require('body-parser');
const mongoose = require('mongoose');

const Author = require('./models/author')

const passport = require("passport");
const users = require("./routes/api/users");
const leetcode = require("./routes/api/leetcode");


const app = express();

app.use(express.static('public'))
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());


const db = require("./config/keys").mongoURI;

mongoose.connect(db, { useNewUrlParser: true })
.then(() => console.log("MongoDB successfully connected"))
  .catch(err => console.log(err));


// Passport middleware
app.use(passport.initialize());
// Passport config
require("./config/passport")(passport);
// Routes
app.use("/api/users", users);
app.use("/api/leetcode", leetcode);

const port = process.env.PORT || 5000; // process.env.port is Heroku's port if you choose to deploy the app there
app.listen(port, () => console.log(`Server up and running on port ${port} !`));


app.get('/', (req, res) => {
	res.sendFile(path.join(__dirname + '/../public/index.html'))
})

app.get('/getAuthor', (req, res) => {

  Author.find((err, data) => {
    if (err) return res.json({ success: false, error: err });
    return res.json({ success: true, data: data });
  });
});
