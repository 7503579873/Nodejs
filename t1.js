

var http = require('http');
var https = require('https');

var httpServer = http.createServer(function(serverReq, serverRes) {
    var body = '';

					   	 var req = https.get("https://directory.dev.arlocloud.com/directory/v2/users/~?apiKey=InsightApiKeyDev&wrap=true&info=true&addFields=all&accessToken=2_5KGjxSn-Ivj07RJ5ux7oFSCLW9T5Y9rKX8E6pEea-      yh1w3kXAjv574mlrz488JyKvmpVtkIh98bm9xJFvPmQ9LC9r_d0py5a7yrPtrCju1nyyx4QBxpt8B5Avz7NifLq7ezbHJ1xNF0JUAAu4c0tuPRku78H0ZjTKq_Mo939euSE", 

			function(res) {
				res.on('data', function(data) {
				    body += data;
      				console.log(body)
				});
				res.on('end', function() {
				    serverRes.writeHead(200, {'Content-Type': 'text/plain'});
				    serverRes.end(body);
					console.log(body)
				});
			    });
    req.end();
});


httpServer.listen(8100,'0.0.0.0', function() {
    console.log('Server is running! http://0.0.0.0:8000');
});

httpServer.on('error', function(err) {
    throw err;
});


