const express = require('express')
const fs = require("fs")
const mysql = require("mysql")
const app = express()
const port = 3000

//var res1 = ""

//fs.readFile('/opt/app-root/secure1/mysecret.sec', 'utf8', function (secerr,secdata) {
//  res1 = res1 + " " + secdata;
//})

app.get('/', (req, res) => {
  //var response = process.env.APP_MSG + res1;

  // fs.readFile('/opt/app-root/secure1/mysecret.sec', 'utf8', function (secerr,secdata) {
  //  response = response + " " + secdata;
  // })

  res.send("Hello Sanket !!")
})

app.get('/myGuests', (req, res) => {
console.log("loading my guests");

var con = mysql.createConnection({
  host: process.env.DATABASE_SVC,
  user: process.env.DATABASE_USER,
  password: process.env.DATABASE_PASSWORD,
  database: process.env.DATABASE_NAME
});

con.connect(function(err) {
  if (err){ 
    console.log("Unable to connect DB");
    res.send("Unable to connect to db")
  }
  console.log("Connected!");
  var sql = "select * from myGuests;"
  con.query(sql, function (err, result) {
    if (err)
    { 
        console.log("Unable to execute query.");
        res.send("Unable to execute query.");
    }
    console.log("Result: " + result);
    res.send(result);
  });
});



})

app.get('/ready', (req, res) => {
  res.send("ok");
})

app.get('/live', (req, res) => {
  res.send("ok");
})


app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`)
})




