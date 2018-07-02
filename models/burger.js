// import orm.js 
var orm = require("../config/orm.js");

// call the ORM functions using burger specific input for the orm 

var burger = {
    // select all burgers
    selectAll: function(cb) {
        orm.selectAll(function(res) {
            cb(res);
        });
    },

    // test version 
    //   create a burger
    insertOne: function(cols, vals, cb) {
        orm.insertOne(cols, vals, function(res) {
            cb(res);
        });
        // console.log(res + "burgers from models");

    },

// old version 
    //create a burger
    // insertOne: function (table, col1, col2, val1, val2, cb) {
    //     orm.insertOne("burgers", "burger_name", "devoured", burger_name, false, function (err, res) {
    //         console.log(res + "burgers from models");
    //         cb(res);
    //     })
    // }
    
    // update a burger
    update: function(colVal, condition, cb) {
        orm.update("burgers", colVal, condition, function(res) {
            cb(res);
        });
    }, 

    //delete a burger
    // delete: function (condition, cb) {
    //     orm.delete("burgers", condition, function (res) {
    //         cb(res);
    //     });
    // }
};

module.exports = burger;
