// import orm.js 
var orm = require("../config/orm.js");

// call the ORM functions using burger specific input for the orm 

var burger = {
// select all burgers
seeAll: function(cb) {
    orm.seeAll("burgers", function(res){
        cb(res);
    });
},

//create a burger
create: function(cols, vals, cb){
    orm.create("burgers", cols, vals, function(res) {
        cb(res);
    });
},
//update a burger
update: function(colVal, condition, cb) {
    orm.update("burgers", colVal, condition, function(res) {
        cb(res);
    });
}, 
//delete a burger
delete: function(condition, cb) {
    orm.delete("burgers", condition, function(res) {
        cb(res);
    });
}
};

module.exports = burger; 
