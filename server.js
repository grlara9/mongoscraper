const express = require("express");
const bodyParser = require("body-parser");
const exphbs = require("express-handlebars");
const mongoose = require("mongoose");  
const request = require("request"); 
const cheerio = require("cheerio"); 

//initialize express

const app = express();

//PORT
const port = process.env.PORT || 3000;

//bodyParser
app.use(bodyParser.urlencoded({ extended: true }));

//Handlebars
app.engine("handlebars", exphbs({ defaultLayout: "main" }));
app.set("view engine", "handlebars");

// Use express.static to serve the public folder as a static directory
app.use(express.static("public"));
// Controllers
const router = require("./controllers/api.js");
app.use(router);
// Connect to the Mongo DB
// If deployed, use the deployed database. Otherwise use the local mongoHeadlines database
var MONGODB_URI = process.env.MONGODB_URI || "mongodb://localhost/mongoHeadlines";

mongoose.connect(MONGODB_URI);


// Start the server
app.listen(PORT, function () {
    console.log("Running on PORT: " + PORT);
});