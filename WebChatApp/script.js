let socket = io();
$('#chatPage').hide();
let username;

$('#register').click( () => {
    username =  $('#usernameInput').val();
    socket.emit('user', username);
    $('#usernameInput').val('');
    $('#loginPage').hide();
    $('#chatPage').show();
    $('#username').append($('<h3>').text(username.toUpperCase()));
});

$(() => {
    $('form').submit(() => {
        socket.emit('chat message', $('#msgInput').val());
        $('#msgInput').val('');
        return false;
    });

    socket.on('user', (user) => {
        $('#message').append($('<p>').text(user));
    });

    socket.on('chat message', (message) => {
        $('#message').append($('<p>').text(message));
    });
});