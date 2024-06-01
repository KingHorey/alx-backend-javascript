export default class Car {
  /* eslint no-underscore-dangle: ["error", { "allowAfterThis": true }] */
  constructor(brand, motor, color) {
	this._brand = brand;
	this._motor = motor;
	this._color = color;
  }
  cloneCar() {
	return new Car;
  }
}
