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

io.sockets.on('connection', (socket) => {

    socket.on('user', (username) => {
        socket.username = username;
        console.log(`${username} connected!`);
        //socket.emit('user',  `${username} connected!`);
        socket.emit('message',  `${username} connected!`);
        socket.broadcast.emit('message', `${username} connected!`);
    });


    socket.on('message', (msg) => {
        console.log(`${socket.username} says: ${msg}`);
    });

});
server.listen(8080);
/*
console.log('A client is connected!');
socket.emit('message',  ${username} connected!`);
socket.broadcast.emit('message', `Another user connected!`);
*/