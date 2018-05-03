var express = require("express");
var burger = require("../models/burger.js")
//create router as a module 
var router = express.Router();


// create routes

router.get("/", function(req, res) {
    burger.seeAll(function(data) {
        var hbsObj = { burgers: data
        };
        console.log(hbsObj);
        res.render("index", hbsObj)
    });
});
router.post("/api/cats", function(req,res) {
    burger.create(["burger_name"], [req.body.burger_name])
})

// export
module.exports = router; 
