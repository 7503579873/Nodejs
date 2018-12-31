




/*

var app = express();
var fs = require("fs");

app.get('/listUsers', function (req, res) {
   fs.readFile( __dirname + "/" + "User.json", 'utf8', function (err, data) {
      console.log( data );
      res.end( data );
   });
})

var server = app.listen(8080, function () {
   var host = server.address().address
   var port = server.address().port

   console.log("Example app listening at http://%s:%s", host, port)
})

*/




/*var express = require('express');
var router = express.Router();
var request = require('request');

router.get('/', function(req, res, next) {
  request({
    uri: 'http://172.29.169.16/api/v2/ocAccessTokenValidate_mfa',
    qs: {
      accessToken: '2_5aFuGunj47PwrTbayLIM4HrZqDt8NCDswK3_FZ8-9lXpBggfSpTa6RlgzOviX310Iemryr4XYix7Up3a1ompnqoXYunm3as8joc1DK7vvYclrsIn7Y8vDqRlHUIISifmuY0cShPaj28mv5HE4A0slVtPEhzQvtDfC4EGagsTRo6R',

    },
function(error, response, body) {
      if (!error && response.statusCode === 200) {
        console.log(body);
console.log(Json.Stringify(response))

        res.json(body);
      } else {
        res.json(error);
      }
    }
  }).pipe(res);
 console.log(res);
});

module.exports = router;



 console.log("Ended");*/

/*var Request = require("request");

Request.get("http://172.29.169.16/api/v2/ocAccessTokenValidate_mfa?accessToken=2_5aFuGunj47PwrTbayLIM4HrZqDt8NCDswK3_FZ8-9lXpBggfSpTa6RlgzOviX310Iemryr4XYix7Up3a1ompnqoXYunm3as8joc1DK7vvYclrsIn7Y8vDqRlHUIISifmuY0cShPaj28mv5HE4A0slVtPEhzQvtDfC4EGagsTRo6R", (error, response, body) => {
    if(error) {
        return console.dir(error);
    }
    console.dir(JSON.parse(body));
});*/






























/*var http = require('http');
 
var  emp= [];
var token='2_59AZQo6zHI377SSk6gQJAeTsFxeCorKvCQf9IpMRDZsp7pn0_rPqLAKtVHNHTYFRzEmUqNSPZNfm2WXsh2xUIy-Gkf4vH1RY-MWrqIuXaqsan3F3nYzSakDG-LDDaCDRm33m9VDEq85eNc3bP4_jlgS9VknDEOsod9qz6y_7K_dL';
 
var extServerOptions = {
  host: '172.29.169.16',
  port: 80,
  path: '/api/v2/ocAccessTokenValidate_mfa?accessToken=2_59AZQo6zHI377SSk6gQJAeTsFxeCorKvCQf9IpMRDZsp7pn0_rPqLAKtVHNHTYFRzEmUqNSPZNfm2WXsh2xUIy-Gkf4vH1RY-MWrqIuXaqsan3F3nYzSakDG-LDDaCDRm33m9VDEq85eNc3bP4_jlgS9VknDEOsod9qz6y_7K_dL' ,
header:{'X-DreamFactory-Api-Key':'6c0748b6b7db0a50f9196f903a6b01a9b944313808d05998649b62831914c952','Content-Type':'application/json','x-real-ip':'0.0.0.0'},
  method: 'GET'

};

console.log(JSON.stringify(extServerOptions))
//3.
function get() {
    http.request(extServerOptions, function (res) {
console.log(res);
        res.setEncoding('utf8');
        res.on('data', function (data) {
            emp = JSON.stringify(data);
          console.log(emp);
        });
 
    }).end();
};


get();*/




var https = require('https');






 let start_time = new Date().getTime();





var optionsget = {


    host : 'ocapi-dev.arlo.com', // here only the domain name
    // (no http/https !)
    port : 443,
    path : '/api/v2/ocAccessTokenValidate_mfa?accessToken=2_5OH5cj0P1RhKzfl2ZmuEt0gx9u_i4v-QOhVmL_baWuu3jngjqk24Ed4cPhz-PAyWXnXtUGOfLvQXPUzQykkTpHe2M45zQL2uvU_XBem9vcj22iPnGK4em6IWkDgI2QVgF4mVLgdR-TtNdaa6iJZCcGt5M2PQeyWyzpxTGy23fwo4', // the rest of the url with parameters if needed
    method : 'GET', // do GET
    headers: {
                "X-DreamFactory-API-Key": "6c0748b6b7db0a50f9196f903a6b01a9b944313808d05998649b62831914c952" 
            }


};

 
console.info('Options prepared:');
console.info(optionsget);
console.info('Do the GET call');
 
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

reqGet.end();
reqGet.on('error', function(e) {
console.log("error"+e)
    console.error(e);

})






