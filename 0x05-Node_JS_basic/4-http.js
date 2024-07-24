const http = require('http');

const httpListener = (req, res) => {
  res.writeHead(200);
  res.end('Hello Holberton School!');
};

const port = 1245;
const host = 'localhost';

const server = http.createServer(httpListener);
server.listen(port, host, () => {
  console.log(`server running on ${port}`);
});

module.exports = server;
