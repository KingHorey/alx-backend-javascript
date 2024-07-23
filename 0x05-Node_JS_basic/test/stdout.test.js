const assert = require('assert');
const defaultMessage = require('../0-console');

describe('output', () => {
  it('outputs a string to STDOUT', () => {
    const text = 'Hello World!';
    let output = '';

    // capture the initial process.stdout.write functionality
    const captureOutput = process.stdout.write;

    process.stdout.write = (data) => {
      output += data;
    };

    defaultMessage(text);

    process.stdout.write = captureOutput;
    assert.equal(output, 'Hello World!\n');
  });
});
