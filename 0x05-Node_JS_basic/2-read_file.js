const fs = require('fs');

function countStudents(path) {
  try {
    const data = fs.readFileSync(path, { encoding: 'utf8' });
    const newArray = data.trim().split('\n').slice(1);
    const cs = [];
    const swe = [];
    newArray.filter((item) => item.length > 4);
    newArray.map((item) => {
      const csSearch = item.search('CS');
      if (csSearch !== -1) {
        const result = /\w*/.exec(item);
        return cs.push(` ${result[0]}`);
      }
      const sweSearch = item.search('SWE');
      if (sweSearch !== -1) {
        const result = /\w*/.exec(item);
        return swe.push(` ${result[0]}`);
      }
      return item;
    });
    console.log(`Number of students: ${cs.length + swe.length}`);
    console.log(
      `Number of students in CS: ${cs.length}. List: ${cs.join(',')}`,
    );
    console.log(
      `Number of students in SWE: ${swe.length}. List: ${swe.join(',')}`,
    );
  } catch (err) {
    throw new Error('Cannot load the database');
  }
}

module.exports = countStudents;
