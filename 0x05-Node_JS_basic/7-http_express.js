const express = require('express');
const countStudents = require('./3-read_file_async');

const app = express();
const port = 1245;
app.listen(port, () => {
  console.log(`Server is running on ${port}`);
});

app.get('/', (req, res) => {
  res.send('Hello Holberton School!');
});

app.get('/students', (req, res) => {
  let output = '';
  const consoleCapture = process.stdout.write;
  process.stdout.write = (data) => {
    output += data;
  };
  countStudents(process.argv[2])
    .then(() => {
      res.status(200).send(`This is the list of our students\n${output}`);
    })
    .catch((err) => res.end(err.message));
  process.stdout.write = consoleCapture;
});

module.exports = app;
