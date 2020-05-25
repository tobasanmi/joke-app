const request = require('request');

request("http://swapi.dev/api/people/1", function(err,res,body){
    if(!err && res.statusCode == 200){
        console.log(JSON.parse(body));
    }
});