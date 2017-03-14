//Lets require/import the HTTP module
var http = require('http');
var path = require("path");

//Lets define a port we want to listen to
// const PORT=8080; 
const PORT = process.env.PORT || 8080;



//We need a function which handles requests and send response
function handleRequest(request, response){
    response.end('It Works!! Path Hit: ' + request.url);
}

//Create a server
// var server = http.createServer(handleRequest);
var server = http.createServer(function(request, response) {
  var filePath = false;

  if (request.url == '/') {
    filePath = "./index.html";
  } else {
    filePath = "index.html";
  }

//   var absPath = "./" + filePath;
//   serverWorking(response, absPath);
});


//Lets start our server
server.listen(PORT, function(){
    //Callback triggered when server is successfully listening. Hurray!
    console.log("Server listening on: http://localhost:%s", PORT);
});