// append file with fs

var fs = require('fs');

fs.appendFile('dummy.txt', '!! New appended text!!', function(err) {
    if (err) throw err;
    console.log('Content appended');
});