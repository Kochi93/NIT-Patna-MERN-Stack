// Server example

var http = require ('http'); 
http.createServer(function(req,res) {
    res.writeHead(200, {'Content-Type' : 'text/html'});
    res.write('<!DOCTYPE html><html><body>admin page</body></html>');
    res.end();
}).listen(3000);