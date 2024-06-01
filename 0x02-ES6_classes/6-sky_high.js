import Building from './5-building.js'

/* eslint no-underscore-dangle: ["error", { "allowAfterThis": true }] */
export default class SkyHighBuilding{
  constructor(sqft=Building._sqft, floors) {
	this._sqft = sqft;
	this._floors = floors;
  }
  get sqft() {
	return this._sqft;
  }
  set sqft(value) {
	if (value instanceof Building) {
		this._sqft = value;
	}
	else {
		throw new TypeError("Value must be an instanceof Building");
	}
  }

  get floors() {
	return this._floors;
  }
  set floors(value) {
	if (typeof (value) === 'number') {
		this._floors = value;
	}
	else {
		throw new TypeError("Value must be a number");
	}
  }

  evacuationWarningMessage() {
	return `Evacuate slowly the ${this._floors} floors`;
  }
}
