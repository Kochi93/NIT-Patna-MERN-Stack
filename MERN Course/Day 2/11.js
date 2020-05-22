// Server example

var http = require ('http'); 
http.createServer(function(req,res) {
    if (req.url == '/') {
        res.writeHead(200, {'Content-Type' : 'text/html'});
        res.write('Homepage');
        res.end();
    } 
    else if (req.url == '/student') {
        res.writeHead(200, {'Content-Type' : 'text/html'});
        res.write('Student');
        res.end();
    }
    else if (req.url == '/teacher') {
        res.writeHead(200, {'Content-Type' : 'text/html'});
        res.write('Teacher');
        res.end();
    }
    else if (req.url == '/admin') {
        res.writeHead(200, {'Content-Type' : 'text/html'});
        res.write('admin');
        res.end();
    }
    else {
        res.end('Invalid url request');
    }
    
}).listen(3000);