var server = require("./server");
// This ./server in the require statement has to match up 
//with the name of the server.js file in the same directory
var router = require("./router");
// Same thing
var requestHandlers = require("./requestHandlers");

var handle = {}
handle["/"] = requestHandlers.start;
handle["/start"] = requestHandlers.start;
handle["/upload"] = requestHandlers.upload;
handle["/show"] = requestHandlers.show;


server.start(router.route, handle);
