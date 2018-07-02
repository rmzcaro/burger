var express = require("express");
var hbs = require("express-handlebars");
var bodyParser = require("body-parser");
var path = require("path");

//create router as a module 
var router = express.Router();

var burger = require("../models/burger.js")
// create routes

// get the burger
router.get("/", function (req, res) {
    burger.selectAll(function(data) {
        var hbsObj = {
            burgers: data
        };
        console.log(hbsObj + "at controller 18");
        for (i = 0; i < hbsObj.length; i++){
            hbsObj.burgers[i].devoured = parseInt( hbsObj.burgers[i].devoured);
        }
        res.render("index", hbsObj)
        console.log(hbsObj + "at line 15 in controller");

    });
});
// add a burger
router.post("/api/burgers/", function (req, res) {
    //add a burger name and whether its devoured
    var newBurger = req.body.burger_name.toString();

    console.log(newBurger + " on line 27 in control");

    burger.insertOne( newBurger, function(result) {
        res.json( { id: result.insertId} );
    })


    // attempt 2
    // var newBurger = req.body.burger_name.toString();
    // console.log(newBurger + "in controller");

   console.log("sending burger to view")

});
// remove burger
router.delete("/api/burgers/:id", function (req, res) {
    var condition = "id = " + req.params.id;

    burger.delete(condition, function (result) {
        if (result.affectedRows == 0) {
            // if no rows changed, then error
            return res.status(404).end();

        } else {
            res.status(200).end();
        }
    });
});

// export
module.exports = router;

// router.put("/api/burgers/:id", function (req, res) {
//     var condition = "id = " + req.params.id;
//     console.log("condition", condition);

//     //change if burger devoured or not 
//     burger.update({
//         devoured: req.body.devoured
//     }, condition, function (result) {
//         if (result.changedRows == 0) {
//             // if now rows were changed then id must not exist so 404
//             return res.status(404).end();
//         } else {
//             // CONFUSED: WHY WOULD I END AFTER SENDING STATUS CODE??
//             // res.send(200, result);
//             res.status(200).end();

//         }
//     });
// });
