const assert = require('assert');

const calculateNumber = require('./1-calcul');

describe ('calculateNumber', () => {
  it('should return sum of rounded numbers based', () => {
    assert.equal(calculateNumber('SUM', 1.2, 3.5), 5);
    assert.equal(calculateNumber('SUM', 1.2, 3.5), 5);
    assert.equal(calculateNumber('SUM', 1.2, 3.5), 5);
  }
  );

  it('should return the difference of rounded numbers', () => {
    assert.equal(calculateNumber('SUBTRACT', 8.4, 3.4), 5);
    assert.equal(calculateNumber('SUBTRACT', 8.4, 2), 6);
    assert.equal(calculateNumber('SUBTRACT', 7.8, 0), 8);
  }
  );

  it('should return the division two of rounded numbers', () => {
    assert.equal(calculateNumber('DIVIDE', 8.4, 2), 4);
    assert.equal(calculateNumber('DIVIDE', 2.0, 2.4), 1);
    assert.equal(calculateNumber('DIVIDE', 7.9, 1.2), 8);
  }
  );

  it('should return error for division with rounded zero', () => {
    assert.equal(calculateNumber('DIVIDE', 1.4, 0), 'Error');
    assert.equal(calculateNumber('DIVIDE', 1.4, 0), 'Error');
    assert.equal(calculateNumber('DIVIDE', 1.4, 0.4), 'Error');
  }
  );
});
