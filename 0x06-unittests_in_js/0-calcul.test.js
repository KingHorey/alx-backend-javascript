const assert = require('assert');

const calculateNumber = require('./0-calcul');

describe ('calculateNumber', () => {
  it('should return the sum of two rounded numbers', () => {
    assert.equal(calculateNumber(1.2, 3.5), 5);
    assert.equal(calculateNumber(2.4, 3.4), 5);
  }
  );

  it('should return either of the number', () => {
    assert.equal(calculateNumber(0, 3), 3);
    assert.equal(calculateNumber(5, 0), 5);
  }
  );

  it('checks for default value', () => {
    assert.equal(isNaN(calculateNumber(3)), true);
    assert.equal(isNaN(calculateNumber(6, '2')), false);
  });
});
