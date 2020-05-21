var http = require('http');
var dt = require("./module.js");

http.createServer(function(req, res) {
    console.log(dt.mydateTime);
}).listen(3000);