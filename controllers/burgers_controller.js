var express = require("express");
var burger = require("../models/burger.js")
//create router as a module 
var router = express.Router();

// export
module.exports = router; 

// create routes

router.get("/", function(req, res) {
    cat.all(function(data) {
        var hbsObj = { burgers: data
        };
        console.log(hbsObj);
        res.render("index", hbsObj)
    })
})