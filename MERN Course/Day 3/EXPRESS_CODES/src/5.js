var path = require('path'); 
var express = require('express');

var app = express();
var publicdir = path.join(__dirname, '../public');


app.use(express.static(publicdir));

app.listen(3000, () => {
    console.log('Server is up on port 3000');
});