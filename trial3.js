const http = require('http');
debugger;
const server = http.createServer((request, response) => {
            response.writeHead(200, {'Content-Type' : 'text/plain'});
            response.write(`Hello World !!! \n`);
 debugger;
            response.end(`Welcome`);
});

server.listen(3000, `127.0.0.1`);
console.log(`Server running at http://127.0.0.1:3000`);