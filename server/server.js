//'use strict';
//var http = require('http');
//var port = process.env.PORT || 1337;

//http.createServer(function (req, res) {
//    res.writeHead(200, { 'Content-Type': 'text/plain' });
//    res.end('Hello World\n');
//}).listen(port);

const http = require('http');
const express = require('express');
const path = require('path');
const socketIO = require('socket.io');

const publicPath = path.join(__dirname, '../public');
const port = process.env.PORT || 3000;


var app = express();
var server = http.createServer(app);
var io = socketIO(server);

app.use(express.static(publicPath));

io.on('connection', (socket) => {
    console.log('New user connected');

    socket.on('disconnect', () => {
        console.log('User was disconnected.');
    });
});

//app.get('/', (req, res) => {
//    //console.log(__dirname + '/../public');
//    //console.log(publicPath);
//    res.render('index.html');
//});

server.listen(port, () => {
    console.log(`Listening to port ${port}`);
});





