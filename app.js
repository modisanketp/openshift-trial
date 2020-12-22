const express = require('express')
const fs = require("fs")
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

app.get('/ready', (req, res) => {
  res.send("ok");
})

app.get('/live', (req, res) => {
  res.send("ok");
})


app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`)
})




