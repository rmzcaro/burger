// import orm.js 
var orm = require("../config/orm.js");

// call the ORM functions using burger specific input for the orm 

var burger = {
    // select all burgers
    all: function (cb) {
        orm.all("burgers", function (res) {
            cb(res);
        });
    },

    //create a burger
    create: function (table, col1, col2, val1, val2, cb) {
        orm.create("burgers", "burger_name", "devoured", burger_name, false, function (err, res) {
            console.log(res + "burgers from models");
            cb(res);
        })
    },
    // ,
    //update a burger
    // update: function(colVal, condition, cb) {
    //     orm.update("burgers", colVal, condition, function(res) {
    //         cb(res);
    //     });
    // }, 
    //delete a burger
    delete: function (condition, cb) {
        orm.delete("burgers", condition, function (res) {
            cb(res);
        });
    }
};

module.exports = burger;
