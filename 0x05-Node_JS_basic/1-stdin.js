process.stdin.setEncoding("utf8");

process.on("SIGINT", () => {
  console.log("This important software is now closing");
});

console.log("Welcome to Holberton School, what is your name?");
let input = "";
if (process.stdin.isTTY) {
  process.stdin.on("readable", () => {
    let input = process.stdin.read();
    if (input !== null) {
      input = input.trim();
      console.log(`Your name is: ${input}`);
      process.on("SIGINT", () => {
        console.log("This important software is now closing");
        done();
      });
    }
  });
} else {
  process.stdin.on("data", (chunk) => {
    input += chunk;
  });

  process.stdin.on("end", () => {
    input = input.trim();
    console.log(`Your name is: ${input}`);
    console.log("This important software is now closing");
    done();
  });
}
