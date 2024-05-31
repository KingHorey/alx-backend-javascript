export default class Currency {
  /* eslint no-underscore-dangle: ["error", {"allowAfterThis": true}] */
  constructor(code, name) {
    this._code = code;
    this._name = name;
  }

  get code() {
    return this._code;
  }

  get name() {
    return this._name;
  }

  set name(value) {
    if (typeof (value) === 'string') {
      this._name = value;
    } else {
      throw new TypeError('Name must be a string');
    }
  }

  set code(value) {
    if (typeof (value) === 'string') {
      this._code = value;
    } else {
      throw new TypeError('Code must be a string');
    }
  }

  displayFullCurrency() {
    return (`${this._name} (${this._code})`);
  }
}
