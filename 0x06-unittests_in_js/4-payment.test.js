const Utils = require('./utils');
const sendPaymentRequestToApi = require('./4-payment');
const sinon = require('sinon');
const expect = require('chai').expect;

describe('sendPaymentRequestToApi', () => {
  it('should call the Utils.calculateNumber and return 10', ()=> {
    const Stub = sinon.stub(Utils, 'calculateNumber').returns(10);
    const consoleStub = sinon.stub(console, 'log');

    sendPaymentRequestToApi(100, 20);

    expect(Stub.calledOnce).to.be.true;
    expect(consoleStub.calledWith('The total is: 10')).to.be.true;

    Stub.restore();
    console.log.restore();
  });
});
