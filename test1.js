var https = require('https');
var express = require("express");
var app = express(); 
var http = require('http');

var response = '';


var XRealIP ="0.0.0.0";
 
var start_time = new Date().getTime(); 
    inputChunks = [];
var stdin = process.stdin;
   var  stdout = process.stdout;

var options = {



"headers": {

"Content-type":"application/json",
'X-Real-IP':XRealIP
}
}
app.get("/",function (req, res) {
req.header

var  optionsget = {


"host" : 'directory.dev.arlocloud.com', 

"port" : 443,
"path" : "/directory/v2/users/~?apiKey=InsightApiKeyDev&wrap=true&info=true&addFields=all&accessToken=2_5KGjxSn-Ivj07RJ5ux7oFSCLW9T5Y9rKX8E6pEea-yh1w3kXAjv574mlrz488JyKvmpVtkIh98bm9xJFvPmQ9LC9r_d0py5a7yrPtrCju1nyyx4QBxpt8B5Avz7NifLq7ezbHJ1xNF0JUAAu4c0tuPRku78H0ZjTKq_Mo939euSE",// the rest of the url with parameters if needed
"method" : 'GET', 
"headers": {

"Content-type":"application/json",
'X-Real-IP':XRealIP
}


};

console.log("hello");
   res.send('Hello World');
   var reqGet = https.request(optionsget, function(res) {

 console.log("statusCode: ", res.statusCode);

 console.log("headers: ", res.headers);

   res.setEncoding('utf8');
   res.on('data', function (chunk) {
      
         //  inputChunks.push(chunk);

     console.log('BODY: ' + chunk);

      response += chunk;
     console.log(JSON.parse(response).data);

      res.send(chunk);
     return JSON.parse(response).data;
   });

  });



 reqGet.on('error', function(e) {
 console.log("error"+e)
 console.error(e);
 });
 reqGet.end();
   
   })

http.createServer(function (request, response) {
   
   response.writeHead(200, {'Content-Type': 'application/json','X-Real-IP':XRealIP});
   
   response.end('Hello Nodejs\n');
}).listen(8000);

// Console will print the message
console.log('Server running at http://127.0.0.1:8000/');
// var reqGet = https.request(optionsget, function(res) {

// console.log("statusCode: ", res.statusCode);

// console.log("headers: ", res.headers);

//   res.setEncoding('utf8');
//   res.on('data', function (chunk) {
      
//         //  inputChunks.push(chunk);

//     console.log('BODY: ' + chunk);

//      response += chunk;
//     console.log(JSON.parse(response).data);

      
//     return JSON.parse(response).data;
//   });
  
  
    
//   res.on('end', function () {
//     var inputJSON = inputChunks.join(),
//         parsedData = JSON.parse(inputJSON),
//         outputJSON = JSON.stringify(parsedData, null, '    ');
//     stdout.write("output"+outputJSON);
//     stdout.write('\n');
    
   
// });
  
  
 
// res.on('data', function(d) {


// console.log('Time elapsed :', new Date().getTime() - start_time);
// console.log('GET result:\n');

// process.stdout.write(d);




// console.log('\n\nCall completed');


// return process.stdout.write(d);



// });
// return {"name":"kanchan"};


//});


// reqGet.on('error', function(e) {
// console.log("error"+e)
// console.error(e);

// });
// reqGet.end();
//  return JSON.parse(response).data;


