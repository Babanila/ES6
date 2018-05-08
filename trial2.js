// Import event module
const events = require('events');

// create event emmitter object
const eventsEmitter = new events.EventEmitter();

// create event handler
const conHandler = () => {
    console.log(" Connected ");

    // fire on data receive event
    eventsEmitter.emit('data_received');
};

// bind the connection with the event handler
eventsEmitter.on('connection', conHandler);


eventsEmitter.on('data_received', () => {
    console.log(" Data successfully received ");
});


eventsEmitter.emit('connection');


console.log(" Program Ended ");