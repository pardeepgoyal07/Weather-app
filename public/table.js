var mysql = require('mysql');

var con = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "pard-2614",
  database: "mydb"
});

con.connect(function(err) {
  if (err) throw err;
  console.log("Connected!");
  var sql = "CREATE TABLE data2 (fname CHAR(25),lname CHAR(25),phone VARCHAR(25),Pass VARCHAR(25),date INT(2),month INT(2),year INT(4))";
  con.query(sql, function (err, result) {
    if (err) throw err;
    console.log("Table created");
  });
});