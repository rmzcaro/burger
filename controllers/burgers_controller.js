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
   console.log("sending burger to view")

});

router.put("/api/burgers/update/:id", function (req, res) {
    var condition = req.params.id;
    console.log("condition", condition);

    //change if burger devoured or not 
    burger.updateOne( condition, function(result) {
       res.json(result);
    });
});

// export
module.exports = router;




// remove burger
// router.delete("/api/burgers/:id", function (req, res) {
//     var condition = "id = " + req.params.id;

//     burger.delete(condition, function (result) {
//         if (result.affectedRows == 0) {
//             // if no rows changed, then error
//             return res.status(404).end();

//         } else {
//             res.status(200).end();
//         }
//     });
// });