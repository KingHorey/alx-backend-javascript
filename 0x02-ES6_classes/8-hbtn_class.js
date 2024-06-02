/* eslint no-underscore-dangle: ["error", { "allowAfterThis": true}] */

export default class HolbertonClass {
  constructor(size, location) {
    this._size = size;
	  this._location = location;
  }

  set size(value) {
    if (typeof (value) === 'string') {
      this._size = value;
    }
    else {
      throw new TypeError("Size must be a string");
    }
  }

  set location(value) {
    if (typeof (value) === 'number') {
      this._location = value;
    }
    else {
      throw new TypeError("Location must be a number");
    }
  }

  get size() {
    return this._size;
  }

  get location() {
    return this._location;
  }

  [Symbol.toPrimitive](value) {
    if (value === 'number') {
      return this._size
    }
    else if (value === 'string') {
      return this._location;
    }
  }
}
