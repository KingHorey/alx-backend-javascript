/* eslint no-underscore-dangle: ["error", {"allowAfterThis": true }] */

export default class Car {
  constructor(brand, motor, color) {
    this._brand = brand;
    this._motor = motor;
    this._color = color;
  }

  static get [Symbol.species]() {
    /* returns the child of the parent class */
    return this;
  }

  cloneCar() {
    return new this.constructor();
  }
}
