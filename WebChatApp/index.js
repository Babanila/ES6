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
app.get('/chat.html', (req, res) => {
    res.sendFile(__dirname + '/chat.html');
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

io.on('connection', (socket) => {
    let addUser = numOfUser + 1 ;
    console.log(`User${addUser} joined on ${fullDate}`);
    io.emit('add user', `User${addUser} joined on ${fullDate}`);
    socket.on('chat message', (msg) => {
        io.emit('chat message', `User${addUser}: ${msg} @${time}`);
        console.log(`user${addUser}: ${msg} @${time}`);
    });
    ++numOfUser;
});
server.listen(3000, () => {
console.log(`Server running at port 3000 http://127.0.0.1`);
});
