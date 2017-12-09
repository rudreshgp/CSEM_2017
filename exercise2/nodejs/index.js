'use strict'
const http = require('http');
const fs = require('fs');

const PATH = __dirname + '/index.html';
// Create an HTTP server
let server = http.createServer((req, res) => {
  let url = req.url;
  let method = req.method;
  console.log(`${method} ${url}`);
  if (method === 'GET' && url === '/foo') {
    // TODO: implement missing code
    fs.readFile(PATH, (err, data) => {
      res.writeHead(200, { 'Content-Type': 'text/html' });
      res.write(data);
      res.end();
    });
  } else {
    res.statusCode = 404;
    res.write(`<h1>${method} ${url} not implemented.</h1>`);
    res.end();
  }
});

server.listen(3000, 'localhost', () => {
  console.log('Server is listening...');
});
