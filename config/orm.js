// import mysql connection 
var connection = require("../config/connection.js");

// helper function 

function printQuestionMarks(num) {
    var arr = [];

    for(var i =0; i < num; i++) {
        arr.push("?");
    }
    return arr.toString();
}

// methods that will execute the mysql commands in the controllers and retrieve and store data in burgers_db 
var orm = {
     all: function (tableInput, cb){
        var queryString = "SELECT * FROM burgers";
        connection.query(queryString, function(err, result) {
            if (err) {
                 console.log("this is an error 1");
                 throw err; 

            }
            cb(result);

            // console.log(result + "line 26");

        });
    }, 
    // insert a new burger into db 
create: function(table, col1, col2, val1, val2) {
    var queryString = "INSERT INTO ??(??, ??) VALUES (?, ?)"; 
    connection.query(queryString, [table, col1, col2, val1, val2], function(err, result){
        if (err) {
            console.log("error creating new burger")
            throw err; 
        }
        console.log(result + " is result of creating burger");
        cb(result);
    });
}, 
// // when burger devoured, update the db 
// update: function(table, col1, val1, col2, val2){
//     var queryString = "UPDATE ?? SET ?? = ? WHERE ?? = ?";
//      connection.query(queryString, [table, col1, val1, col2, val2], function(err, result) {
//         if (err) {
//             throw err; 
//         }
//         console.log(result);
//         cb(result);
//      });
// },

// delete: function(table, col1, val1, col2, val2){
//     var queryString = "UPDATE ?? SET ?? = ? WHERE ?? = ?";
//      connection.query(queryString, [table, col1, val1, col2, val2], function(err, result) {
//          if (err) throw err; 
//          console.log(result)
//      });
// } 
};
// export the ORM object in module.exports s
module.exports = orm; 