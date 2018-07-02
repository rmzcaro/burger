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
    
    // update a burger
    updateOne: function(condition, cb) {
        orm.updateOne(condition, function(res) {
            cb(res);
        });
    }

    //delete a burger
    // delete: function (condition, cb) {
    //     orm.delete("burgers", condition, function (res) {
    //         cb(res);
    //     });
    // }
};

module.exports = burger;
