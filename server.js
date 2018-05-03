var express = require("express");
var bodyParser = require("body-parser");

var port = process.env.PORT || 8000; 

var app = express();

var mysql = require('mysql');

// serve static content for the app from the public directory 
app.use(express.static("public"));
// parse (ie to encode / decode)
app.use(bodyParser.urlencoded({extended: true}));

// parsee application (json)
app.use(bodyParser.json());

// set handlebars 
var hbs = require("express-handlebars");

app.engine("handlebars", hbs({defaultLayout:"main"}));
app.set("view engine", "handlebars");

var routes = require("./controllers/burgers_controller.js")

app.listen(port, function() {
    console.log("The app is listening on port " + port);
});
