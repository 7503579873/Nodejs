var request = require('request');
request('http://172.29.169.16/api/v2/ocAccessTokenValidate_mfa?accessToken=2_59AZQo6zHI377SSk6gQJAeTsFxeCorKvCQf9IpMRDZsp7pn0_rPqLAKtVHNHTYFRzEmUqNSPZNfm2WXsh2xUIy-Gkf4vH1RY-MWrqIuXaqsan3F3nYzSakDG-LDDaCDRm33m9VDEq85eNc3bP4_jlgS9VknDEOsod9qz6y_7K_dL', function (error, response, body) {
    if (!error && response.statusCode == 200) {
        console.log(body) // Print the google web page.
     }else{
console.log(response)
}
})

