const express = require('express');
const path = require('path');
var mongoose = require('mongoose');
var morgan = require('morgan');

var gallery = require('./routes/gallery');

const app = express();

const STATIC_DIR = path.join(__dirname, 'client/build/');
const UTILS_DIR = path.join(__dirname, 'utils/');
console.log("STATIC DIR:", STATIC_DIR);

// Setup database
mongoose.Promise = require('bluebird');
const mongoDB = require(UTILS_DIR + 'database-conf').mongoDB;
mongoose.connect(mongoDB);

app.use(morgan('common'));

// Routes
app.use('/api', gallery);

app.get('*', (req, res) => {
	res.sendFile(STATIC_DIR + 'index.html');
}); 

module.exports = app;