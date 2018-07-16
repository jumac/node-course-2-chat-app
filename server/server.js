//'use strict';
//var http = require('http');
//var port = process.env.PORT || 1337;

//http.createServer(function (req, res) {
//    res.writeHead(200, { 'Content-Type': 'text/plain' });
//    res.end('Hello World\n');
//}).listen(port);

const express = require('express');
const path = require('path');
const publicPath = path.join(__dirname, '../public');
const port = process.env.PORT || 3000;

var app = express();
app.use(express.static(publicPath));

app.get('/', (req, res) => {
    //console.log(__dirname + '/../public');
    //console.log(publicPath);
    res.render('index.html');
});

app.listen(3000, () => {
    console.log(`Listening to port ${port}`);
});





