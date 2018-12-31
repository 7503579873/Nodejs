var https = require('https');

 let start_time = new Date().getTime();
 var XRealIP ="0.0.0.0"


 
console.info('Options prepared:');
console.info(optionsget);
console.info('Do the GET call');
 
var optionsget = {


    "host" : 'directory.dev.arlocloud.com', // here only the domain name
    // (no http/https !)
    "port" : 443,
    "path" : "/directory/v2/users/~?apiKey=InsightApiKeyDev&wrap=true&info=true&addFields=all&accessToken=2_5KGjxSn-Ivj07RJ5ux7oFSCLW9T5Y9rKX8E6pEea-yh1w3kXAjv574mlrz488JyKvmpVtkIh98bm9xJFvPmQ9LC9r_d0py5a7yrPtrCju1nyyx4QBxpt8B5Avz7NifLq7ezbHJ1xNF0JUAAu4c0tuPRku78H0ZjTKq_Mo939euSE",// the rest of the url with parameters if needed
    "method" : 'GET', // do GET
     "headers": {
                 
                "Content-type":"application/json",
                'X-Real-IP':XRealIP
            }


};
// do the GET request
var reqGet = https.request(optionsget, function(res) {


    console.log("statusCode: ", res.statusCode);

  console.log("headers: ", res.headers);
 
 
    res.on('data', function(d) {

 

    console.log('Time elapsed :', new Date().getTime() - start_time);
        console.info('GET result:\n');

        process.stdout.write(d);
        console.info('\n\nCall completed');


    });

 
});


reqGet.on('error', function(e) {
console.log("error"+e)
    console.error(e);

});
reqGet.end();










































