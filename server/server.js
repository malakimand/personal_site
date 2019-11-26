const express = require('express');
const app = express();
const path = require('path')
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
const Author = require('./models/author')

app.listen(3000, function() {
  console.log('listening on 3000')
})

mongoose.connect('mongodb://root:root123@ds261817.mlab.com:61817/gql-jim');
mongoose.connection.once('open', () => {
	console.log('connected to database');
})

app.use(express.static('public'))
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

app.get('/', (req, res) => {
	res.sendFile(path.join(__dirname + '/../public/index.html'))
})

app.get('/getAuthor', (req, res) => {

  Author.find((err, data) => {
    if (err) return res.json({ success: false, error: err });
    return res.json({ success: true, data: data });
  });
});
