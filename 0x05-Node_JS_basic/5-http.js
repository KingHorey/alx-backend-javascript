const http = require("http");
const countStudents = require("./3-read_file_async");

const httpListener = async (req, res) => {
  res.writeHead(200);
  if (req.url === "/") {
    res.end("Hello Holberton School!");
  } else if (req.url === "/students") {
    let output = "";
    const consoleCapture = process.stdout.write;
    process.stdout.write = (data) => {
      output += data;
    };
    await countStudents(process.argv[2]);
    process.stdout.write = consoleCapture;
    res.end(output);
  }
};

const port = 1245;
const host = "localhost";

const server = http.createServer(httpListener);
server.listen(port, host, () => {
  console.log(`server running on ${port}`);
});

module.exports = server;
