var fs = require('fs');

var buf = fs.readFileSync('json.json')
var data = buf.toString();
var dataJSON = JSON.parse(data)

dataJSON.number = 1234;
dataJSON.Hobby = "Chess";

var userJSON = JSON.stringify(dataJSON);
fs.writeFileSync('json', userJSON);

