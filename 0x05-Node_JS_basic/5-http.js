const http = require('http');
const countStudents = require('./3-read_file_async');

const httpListener = (req, res) => {
  switch (req.url) {
    case '/': {
      res.writeHead(200);
      res.end('Hello Holberton School!');
      break;
    }
    case '/students': {
      res.writeHead(200);
      let output = '';
      const consoleCapture = process.stdout.write;
      process.stdout.write = (data) => {
        output += data;
      };
      countStudents(process.argv[2])
        .then(() => {
          res.end(`This is the list of our students\n${output}`);
        })
        .catch((err) => res.end(err.message));
      process.stdout.write = consoleCapture;
      break;
    }
    default:
      res.end('Hello Holberton School!');
  }
};

const port = 1245;
const host = 'localhost';

const server = http.createServer(httpListener);
server.listen(port, host, () => {
  console.log(`server running on ${port}`);
});

module.exports = server;
