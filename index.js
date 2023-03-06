const Publisher = require('./publisher.js');
const Subscriber = require('./subscriber');

var publisher = new Publisher('Message Hub');
var subscriber1 = new Subscriber('First Subscriber');
var subscriber2 = new Subscriber('Second Subscriber');
var subscriber3 = new Subscriber('Third Subscriber');

console.log('Adding the first and the second subscribers to the publisher.');
// Add subscriber1 and subscriber2 to the publisher

console.log('Notifying subscribers.');
publisher.notify('Sequence initiated.');

console.log('Removing the first subscriber.');
// Remove subscriber 1

console.log('Adding the third subscriber.');
// Add subscriber3

console.log('Notifying subscribers.');
publisher.notify('Update received from the server.');