const fs = require("fs");

function readDatabase(path) {
  return new Promise((resolve, reject) => {
    fs.readFile(path, "utf8", (err, data) => {
      if (err || !data) {
        reject(new Error("Cannot load the database"));
        return;
      }
      const newArray = data.trim().split("\n").slice(1);
      const names = [];
      newArray.filter((item) => item.length > 4);
      newArray.forEach((item) => {
        const result = /\w*/.exec(item);
        names.push(` ${result[0]}`);
      });
      return names;
      resolve("Done");
    });
  });
}
