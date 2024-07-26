const Utils = require('./utils');
const sendPaymentRequestToApi = require('./4-payment');
const sinon = require('sinon');
// const { beforeEach, afterEach, it } = require('mocha');
const expect = require('chai').expect;

describe('sendPaymentRequestToApi', () => {
  let consoleSpy;

  beforeEach(() => {
    consoleSpy = sinon.spy(console, 'log');
  });

  afterEach(() => {
    consoleSpy.restore();
  });

  it('verify that sendrequestoapi returns 120', () => {
    sendPaymentRequestToApi(100, 20);
    expect(consoleSpy.calledWith('The total is: 120')).to.be.true;
    expect(consoleSpy.calledOnce).to.be.true;
  });

  it('verify that sendrequestoapi returns 20', () => {
    sendPaymentRequestToApi(10, 10);
    expect(consoleSpy.calledWith('The total is: 20')).to.be.true;
    expect(consoleSpy.calledOnce).to.be.true;
  });
});
