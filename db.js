var mysql = require('mysql');

var dbConn = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "",
  database : 'backend' 
// within this db => tables => movies and ratings 
});

dbConn.connect(function(err) {
  if (err) throw err;
  console.log("Connected!");
});

module.exports = dbConn;