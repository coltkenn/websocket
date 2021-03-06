const http = require('http');
const static = require('node-static');
const file = new static.Server('./');
const server = http.createServer((req, res) => {
  req.addListener('end', () => file.serve(req, res)).resume();
});
const port = 8081;

server.listen(port, () => console.log(`Server running at http://localhost:${port}`));