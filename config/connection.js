//set up mysql connection 
var mysql = require("mysql");
// create the connection information for the sql database
var connection = mysql.createConnection({
    host: "localhost",  
    user: "root",
    password: "iwtmbabp2018",
    database: "burgers_db"
  });
  
  // connect to the mysql server and sql database
  connection.connect(function(err) {
    if (err) {
      // err.stack is the point in the code at which the error was instantiated 
      console.error("error connection: " + err.stack);
      return; 
    }
    console.log("connected as id " + connection.threadId);

  }); 
// export connection 
  module.exports = connection; 
