const fs = require("fs");

var msg = process.env.APP_MSG;

console.log(msg);

fs.readFile('/opt/app-root/secure/myapp.sec', 'utf8', function (secerr,secdata) {
    console.log(secdata);
})
