// Normal way
const express = require('express');
const http = require('http');
const socketIO = require('socket.io');
const path = require('path');

const app = express();
const server = http.createServer(app);
const io = socketIO(server);

/*
// Short form
const app = require('express')();
const server = require('http').Server(app);
const io = require('socket.io')(server);
*/

app.get('/', (req, res) => {
    res.sendFile(__dirname + '/index.html');
});

io.on('connection', (socket) => {
    console.log(`User connected`);
    socket.on('chat message', (msg) => {
        //console.log(`message: ${msg}`);
        //socket.broadcast.emit('chat message', {message: msg});
        io.emit('chat message', msg);
    });
});

server.listen(3000, () => {
console.log(`Server running at port 3000 http://127.0.0.1`);
});