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
      console.error("error connection: " + err.stack);
      return; 
    }
    console.log("connected as id " + connection.threadId);

  }); 

  module.exports = connection; 
