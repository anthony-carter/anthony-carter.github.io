let base64 = require('base-64');

let url = 'https://api.propublica.org/congress/116/';
let key = 'cHWA0cyVrIeIZHFmZyrlp3UBNFO1aqLn7LsYLij2';

let headers = new Headers();

//headers.append('Content-Type', 'text/json');
headers.set('Authorization', 'Basic ' + base64.encode(key));

fetch(url, {method:'GET',
        headers: headers,
        //credentials: 'key'
       })
.then(response => response.json())
.then(json => console.log(json));
//.done();

function parseJSON(response) {
return response.json()
}
