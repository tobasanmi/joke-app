
const request = require('request');
const fs = require('fs');
const searchTerm = process.argv[2];
console.log(searchTerm)
const options =  {
    url: 'https://icanhazdadjoke.com/',
    headers: {
      'User-Agent': 'request',
      'Accept': "application/json"
    }
  };
request(options, function(error, response, body) {
  if (!error && response.statusCode == 200) {
    //console.log(body);
   fs.writeFile('joke.text',(JSON.parse(body).joke),(err)=>{
       if(err) throw err;
        console.log('message saved');
    });
  }
  else {
      console.log('Error', error)
  }
});