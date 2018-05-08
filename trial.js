/*
const http = require('http');

const server = http.createServer(function (request, response) {
        response.writeHead(200, {"Content-Type" : "text/html"});
        response.end(`<h1>Welcome to our website</1>`);
        // response.end();
        console.log("Server Connected");
});
server.listen(3000, "127.0.0.1");

*/

/*
// Blocking I/O
const fs = require('fs');

const data = fs.readFileSync("/Users/becky/Documents/GitHub/ES6/" + 'file.txt');

console.log(data.toString());
console.log("Program finished");
*/


// Non-Blocking I/O
const fs = require('fs');
const path = require('path');

/*
fs.readFile(path.join(__dirname, 'file.txt'), {encoding: 'utf-8'}, function(err, data){
        if(err){console.log(err)};
        console.log(data);
});
*/

/*
fs.readFile("/Users/becky/Documents/GitHub/ES6/" + 'file.txt', function (err, data) {
               if(err){console.log(err)};
                console.log(data.toString());
});
console.log(" Program Ended ");
*/
/*
fs.writeFile(path.join(__dirname, 'file1.txt'), 'This is the message sent ', function (err) {
    if(err){console.log(err)}
    console.log(`written done !!!);
});
*/

fs.createReadStream(path.join(__dirname, 'file1.txt')).pipe(process.stdout);