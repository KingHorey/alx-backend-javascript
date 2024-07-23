process.stdin.setEncoding('utf8');

console.log('Welcome to Holberton School, what is your name?');

process.stdin.on('readable', () => {
  let input = process.stdin.read();

  if (input !== null) {
    input = input.trim();
    console.log('Your name is:', input);
  }
});

process.on('exit', () => {
  console.log('This important software is now closing');
});
