var PORT = process.env.PORT || 3000;
var IP = process.env.IP || 'localhost';
var express = require('express');
var app = express();
var http = require('http').Server(app);

app.use(express.static(__dirname + '/public'));

http.listen(PORT, IP, function(){
    console.log("Socket-IO has started");
});