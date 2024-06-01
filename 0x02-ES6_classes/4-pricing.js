import Currency from './3-currency'

export default class Pricing {
	/* eslint no-underscore-dangle: ['error', { 'allowAfterThis': true }] */
  constructor(amount, currency) {
	this._amount = amount;
	this._currency = currency;
  }

  get amount() {
	return this._amount;
  }
  get currency() {
	return this._currency;
  }
  set amount(value) {
	if (typeof (value) === 'number') {
		this._amount = value
	}
	else {
		throw new TypeError("Amount must be a number");
	}
  }
  set currency(value) {
	if (value instanceof Currency) {
		this._currency = value;
	}
	else {
		throw new TypeError("Currency must be a string");
	}
  }
  displayFullPrice() {
	return (`${this._amount} ${this._currency.name} (${this._currency.code})`);
  }
  convertPrice(amount, conversionRate) {
	if ((typeof (amount) === 'number') && (typeof (conversionRate) === 'number')) {
		return (amount * conversionRate);
	}
  }
}
