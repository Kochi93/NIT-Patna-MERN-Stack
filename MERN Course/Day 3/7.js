// Events demonstration

 var fs = require('fs');
 var rs = fs.createReadStream('./dummy.txt');

 rs.on('open', function() {
     console.log('event triggered');
 });