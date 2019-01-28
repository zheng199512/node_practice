var events = require('events');
var eventEmitter = new events.EventEmitter();

var listen1 = function listen1() {
  console.log('监听器listener1');
}
var listen2 = function listen2() {
  console.log('监听器2');
}

eventEmitter.addListener('connection', listen1);
eventEmitter.on('connection', listen2);

var eventListeners = eventEmitter.listenerCount('connection');

console.log(eventListeners + '个监听器');

eventEmitter.emit('connection');

eventEmitter.removeListener('connection', listen1);

eventEmitter.emit('connection');
eventListeners = eventEmitter.listenerCount('connection');
console.log(eventListeners + '个监听器');