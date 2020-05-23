var events = require('events');
var eventEmitter = new events.EventEmitter();

var handler = function() {
    console.log('Event is triggered');
};

eventEmitter.on('hello', handler);

eventEmitter.emit('hello');