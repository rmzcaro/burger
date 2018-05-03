var express = require("express");
var burger = require("../models/burger.js")
//create router as a module 
var router = express.Router();


// create routes

// get the burger
router.get("/", function (req, res) {
    burger.seeAll(function (data) {
        var hbsObj = {
            burgers: data
        };
        console.log(hbsObj);
        res.render("index", hbsObj)
    });
});
// ad a burger
router.post("/api/cats", function (req, res) {
    //add a burger name and whether its devoured
    burger.create(["burger_name", "devoured"], [req.body.burger_name, req.body.devoured], function (result) {
        // send back the id of the new burger
        res.json({
            id: result.insertId
        });
    });
});

router.put("/api/burgers/:id", function (req, res) {
    var condition = "id = " + req.params.id;
    console.log("condition", condition);

    //change if burger devoured or not 
    burger.update({
        devoured: req.body.devoured
    }, condition, function (result) {
        if (result.changedRows == 0) {
            // if now rows were changed then id must not exist so 404
            return res.status(404).end();
        } else {
            res.status(200).end();
        }
    });
});

// remove burger
router.delete("/api/burgers/:id", function (req, res) {
    var condition = "id = " + req.params.id;

    burger.delete(condition, function (req, res) {
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