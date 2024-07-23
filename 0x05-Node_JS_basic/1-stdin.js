process.stdin.setEncoding('utf8');

process.stdout.write('Welcome to Holberton School, what is your name?\n');

process.stdin.on('readable', () => {
  let input = process.stdin.read();

  if (input !== null) {
    input = input.trim();
    process.stdout.write(`Your name is: ${input}\n`);
    process.exit();
  }
});

process.on('exit', () => {
  process.stdout.write('This important software is now closing\n');
  process.exit(0);
});
