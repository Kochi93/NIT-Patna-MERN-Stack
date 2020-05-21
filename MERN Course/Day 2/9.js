var http = require('http');
http.createServer(function(req,res){
    res.writeHead(200, {'Content-Type' : 'text/html'});
    res.write('<html><body><p>This is the admin Page.</p></body></html>');
    res.end();

}).listen(3000);
