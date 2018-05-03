var connection = require("./connection.js");

// methods that will execute the mysql commands in the controllers 
// methods to retrieve and store data in burgers_db 
var orm = {
    // select all burgers to show up on page 
    selectAll: function (tableIput, colToSearch, valOfCol){
        var queryString = "SELECT * FROM ?? WHERE ?? = ?";
        connection.query(queryString, [tableIput, colToSearch, valOfCol], function(err, result) {
            if (err) throw err; 
            console.log(result);
        });
    }, 
    // insert a new burger into db 
insertOne: function(table, col1, col2, val1, val2) {
    var queryString = "INSERT INTO ?? (??, ??) VALUES (?,?)"; 
    connection.query(queryString, [table, col1, col2, val1, val2], function(err, result){
        if (err) throw err; 
        console.log(result);
    });
}, 
// when burger devoured, update the db 
updateOne: function(table, col1, val1, col2, val2){
    var queryString = "UPDATE ?? SET ?? = ? WHERE ?? = ?";
     connection.query(queryString, [table, col1, val1, col2, val2], function(err, result) {
         if (err) throw err; 
         console.log(result)
     });
} 
};
// export the ORM object in module.exports s
module.exports = orm; 