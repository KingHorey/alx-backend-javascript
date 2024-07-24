const fs = require('fs');

/* eslint no-unused-vars: "error" */
function countStudents(path) {
  return new Promise((resolve, reject) => {
    fs.readFile(path, 'utf8', (err, data) => {
      if (err || !data) {
        reject(new Error('Cannot load the database'));
        return;
      }
      const newArray = data.trim().split('\n').slice(1);
      const cs = [];
      const swe = [];
      newArray.filter((item) => item.length > 4);
      newArray.forEach((item) => {
        const csSearch = item.search('CS');
        if (csSearch !== -1) {
          const result = /\w*/.exec(item);
          cs.push(` ${result[0]}`);
        }
        const sweSearch = item.search('SWE');
        if (sweSearch !== -1) {
          const result = /\w*/.exec(item);
          swe.push(` ${result[0]}`);
        }
      });
      console.log(`Number of students: ${cs.length + swe.length}`);
      console.log(
        `Number of students in CS: ${cs.length}. List:${cs.join(',')}`,
      );
      console.log(
        `Number of students in SWE: ${swe.length}. List:${swe.join(',')}`,
      );
      resolve('Done');
    });
  });
}

module.exports = countStudents;
