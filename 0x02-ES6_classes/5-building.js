export default class Building {
  /* eslint no-underscore-dangle: ["error", { "allowAfterThis": true }] */
  constructor(sqft) {
    this._sqft = sqft;
    if ((this.constructor !== Building) && (this.evacuationWarningMessage === undefined)) {
      throw new Error('Class extending Building must override evacuationWarningMessage');
    }
  }

  set sqft(value) {
    if (typeof (value) === 'number') {
      this._sqft = value;
    } else {
      throw new TypeError('Sqft should be a number');
    }
  }

  get sqft() {
    return this._sqft;
  }
}
