const {describe, it} = require("mocha");
const sinon = require("sinon");
const sendPaymentRequestToApi = require("./3-payment");
const Utils = require("./utils");
const assert = require("assert");

describe("sendPaymentRequestToApi", function() {
    it("check that Utils.calculateNumber is stubbed", function() {
		const spy = sinon.spy(console, "log");
		const stub = sinon.stub(Utils, "calculateNumber").returns(10);
		sendPaymentRequestToApi(500, 50);
	
		assert(spy.withArgs("The total is: 10").calledOnce);
		assert(stub.withArgs("SUM", 500, 50).calledOnce);
		});
	});