 // Dependencies
var express = require('express');
var http = require('http');
var path = require('path');
var socketIO = require('socket.io');
var app = express();
var server = http.Server(app);
var io = socketIO(server);



app.get('/', function(request , response) {
	response.sendFile(path.join(__dirname, 'index.html'));
});

app.get('/home', function(request , response) {
	response.sendFile(path.join(__dirname, 'index.html'));
});

app.get('/about', function(request , response) {
	response.sendFile(path.join(__dirname, 'index.html'));
});

app.get('/skills', function(request , response) {
	response.sendFile(path.join(__dirname, 'index.html'));
});

app.get('/work', function(request , response) {
	response.sendFile(path.join(__dirname, 'index.html'));
});

app.get('/contact', function(request , response) {
	response.sendFile(path.join(__dirname, 'index.html'));
});

app.use(express.static('./'));

// server.listen(5000, function() {
//   console.log('Starting server on port 5000');
// });


server.listen(server_port , server_ip_address , function(){
	console.log('Listening on' + server_ip_address + ', port' + server_port);	
})


