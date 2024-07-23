process.stdin.setEncoding('utf8');

process.stdout.write('Welcome to Holberton School, what is your name?\n');
let input = '';
if (process.stdin.isTTY) {
  process.stdin.on('readable', () => {
    let input = process.stdin.read();
    if (input !== null) {
      input = input.trim();
      process.stdout.write(`Your name is: ${input}\n`);
    }
  });
} else {
  process.stdin.on('data', (chunk) => {
    input += chunk;
  });

  process.stdin.on('end', () => {
    input = input.trim();
    process.stdout.write(`Your name is: ${input}\n`);
    process.stdout.write('This important software is now closing\n');
  });
}
