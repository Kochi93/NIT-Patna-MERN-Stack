// append file with fs

var fs = require('fs');

fs.writeFile('dummy.txt', 'Writing file', function(err) {
    if (err) throw err;
    console.log('Content written');
});