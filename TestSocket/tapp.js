const http = require('http');
const fs = require('fs');

// Loading the tindex.html file displayed to the client
const server = http.createServer((req, res) => {
    fs.readFile(__dirname + '/tindex.html', 'utf-8', (error, content) => {
        res.writeHead(200, {"Content-Type": "text/html"});
        //res.write('Hello \n')
        res.end(content);
    });
});

// Loading socket.io
const io = require('socket.io').listen(server);

// When a client connects, we note it in the console

io.on('connection', (socket) => {
    console.log('A client is connected!');
    io.emit('message', 'You are connected!');
});

server.listen(8080);

/*
io.on('connection', (socket) => {
    console.log('A client is connected!');
});

 */