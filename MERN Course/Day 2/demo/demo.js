var http = require('express');

http.createServer(function(req, res) {
    res.writeHead(200, {'Content-Type' : 'type/html'});
    res.write("hiiii");
    res.writeHead.end();
}).listen(8080);