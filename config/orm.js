// import mysql connection 
var connection = require("../config/connection.js");

// helper function for SQL

function printQuestionMarks(num) {
    var arr = [];

    for(var i =0; i < num; i++) {
        arr.push("?");
    }
    return arr.toString();
}

// helper function to convert object/val pairs 
function objToSql(ob) {
    var arr = [];

    // loop through the keys and push the key / value as a string 
    for (var key in ob) {
        var value = ob[key];
        if (Object.hasOwnProperty.call(ob, key)) {
            // if string with space add quotations 
            if (typeof value === "string" && value.indexOf(" ") >= 0) {
                value = "'" + value + "'";
            }
            arr.push(key + "=" + value);
        }
    }

    //arr of strings to a single comma separated str
    return arr.toString();
}

// methods that will execute the mysql commands in the controllers and retrieve and store data in burgers_db 
var orm = {
     selectAll: function (cb){
        var queryString = "SELECT * FROM burgers";
        connection.query(queryString, function(err, result) {
            if (err)                 throw err;
        
            cb(result);
            // console.log(result + "line 26");
        });
    }, 

    //test
    insertOne: function(newBurger, cb) {
        var queryString = "INSERT INTO burgers SET ?";
        connection.query(queryString, {burger_name:newBurger}, function(err, result) {
            if (err) throw (err);
            cb(result)
        });
    }

    //old version
    // insert a new burger into db 
// insertOne: function(table, col1, col2, val1, val2) {
//     var queryString = "INSERT INTO ??(??, ??) VALUES (?, ?)"; 
//     connection.query(queryString, [table, col1, col2, val1, val2], function(err, result){
//         if (err) {
//             console.log("error creating new burger")
//             throw err; 
//         }
//         console.log(queryString + " is query of creating burger");
//         cb(result);
//     });
// }, 
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

// test
// delete: function(table,condition, cb){
//     var queryString = "DELETE FROM" + table;
//     queryString += " WHERE ";
//     queryString += condition; 

//      connection.query(queryString, function(err, result) {
//          if (err) {
//              throw err; 
//          }
//          cb(result);
//          console.log(result)
//      });
// }


// ORIGINAL  below 
// delete: function(table, col1, val1, col2, val2){
//     var queryString = "DELETE ?? SET ?? = ? WHERE ?? = ?";
//      connection.query(queryString, [table, col1, val1, col2, val2], function(err, result) {
//          if (err) {
//          throw err; 
//         }
//         cb(result);
//      });
// } 
};
// export the ORM object in module.exports s
module.exports = orm;
