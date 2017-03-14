
//Lets require/import the HTTP module
// let http = require('http');
// let path = require("path");
var express = require('express');
var app = express();

//Lets define a port we want to listen to
// const PORT=8080; 
app.set('port', (process.env.PORT || 8080));

//We need a function which handles requests and send response
// function handleRequest(request, response){
//     response.end('It Works!! Path Hit: ' + request.url);
// }

app.use(express.static(__dirname + '/public'));

app.get('/', function(request, response) {
  response.render('index')
});


//Create a server
// var server = http.createServer(handleRequest);
// var server = http.createServer(function(request, response) {
//   var filePath = false;

//   if (request.url == '/') {
//     filePath = "./index.html";
//   } 
//   else {
//     filePath = "index.html";
//   }

//   var absPath = "./" + filePath;
//   serverWorking(response, absPath);
// });


//Lets start our server
// server.listen(PORT, function(){
//     //Callback triggered when server is successfully listening. Hurray!
//     console.log("Server listening on: http://localhost:%s", PORT);
// });

app.listen(app.get('port'), function() {
  console.log('Node app is running on port', app.get('port'));
});