// Normal way
const express = require('express');
const http = require('http');
const socketIO = require('socket.io');
const path = require('path');

const app = express();
const server = http.createServer(app);
const io = socketIO(server);

app.get('/', (req, res) => {
    res.sendFile(__dirname + '/webchat.html');
});

const currentDate = new Date();
const date = currentDate.getDate();
const day = currentDate.getDay();
const days = ["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"];
const month = currentDate.getMonth();
const months = ["January","Febuary","March","April","May","June","July", "August", " September", "October", "November", "December"];
const year = currentDate.getFullYear();
const fullDate = `${days[day]} ${date} ${months[month]} ${year}`;
const hour = currentDate.getHours();
const minutes = currentDate.getMinutes();

let time = hour > 12 ? `${hour - 12 }:${minutes} PM` : `${hour}:${minutes} AM`;

let numOfUser = 0;
let username = {};

io.on('connection', (socket) => {

    socket.on('user', (username) => {
        socket.username = username;
        console.log(`${socket.username.toUpperCase()} joined on ${fullDate}`);
        socket.broadcast.emit('user', `${username} joined`);
        ++numOfUser;
    });

    socket.emit('add user', `${socket.username}`);

    socket.on('chat message', (msg) => {
        socket.emit('chat message', `${msg} @${time}`);
        socket.broadcast.emit('chat message', `${socket.username}: ${msg} @${time}`);
        console.log(`${socket.username}: ${msg} @${time}`);
    });

    console.log(`${numOfUser} users online`);
});

server.listen(3000, () => {
console.log(`Server running at port 3000 http://127.0.0.1`);
});
