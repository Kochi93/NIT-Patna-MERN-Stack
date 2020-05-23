var express = requuire ('express');

var app = express();

app.get('', function ( req, res) {
    res.send( 'Hello express again!');
})

app.listen(3000, function() {
    console.log( 'Server has started on Port 3000.');
})