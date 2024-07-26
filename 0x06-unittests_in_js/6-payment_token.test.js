const getPaymentTokenFromAPI = require('./test');
const assert = require('assert');

describe ('getPaymentTokenFromAPI', () => {
	it('it should return Successful response from the API', function(done) {
		getPaymentTokenFromAPI(true)
			.then((result) => {
			const check = result.result;
			assert.equal(result, true);
			done();
		});
		// done();
	});

});
