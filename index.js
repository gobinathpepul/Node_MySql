const express = require("express");
const app = express();

const v27Route = require("./versions/v27");
const v28Route = require("./versions/v28");

app.use("/api/v27", v27Route);
app.use("/api/v28", v28Route);

var mysql = require("mysql");
var connection = mysql.createConnection({
  host: "127.0.0.1",
  port: 8889,
  user: "root",
  password: "root",
  database: "testDB",
});

connection.connect();

connection.query(
  "SELECT * from users where age > 22 limit 10",
  function (error, results, fields) {
    if (error) throw error;
    app.listen(4000, () => {
      console.log("Server started in 4000");
    });
  }
);

connection.end();
