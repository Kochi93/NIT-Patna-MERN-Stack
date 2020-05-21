var http = require("http");

http.createServer(function(req,res) {
    res.end("Server is responding");
}).listen(3000);