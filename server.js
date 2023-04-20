// Require Dependencies
const express = require("express");
const fs = require("fs");
const path = require('path');
const dotenv = require('dotenv');

//Read the contents of the .env file
const envContents = fs.readFileSync('.env', 'utf8');

//Parse the contents of the .env file into an object
const envConfig = dotenv.parse(envContents);

// Initialize express app
const app = express();
const PORT = process.env.PORT || 3000;

// Setup data parsing
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(express.static(__dirname));

//Require routes file
require('./routes/routes')(app);

// Setup listener
app.listen(PORT, function() {
  console.log("App listening on PORT: " + PORT); //http://localhost:3000
});
