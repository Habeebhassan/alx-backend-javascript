const {describe, it} = require("mocha");
const sinon = require("sinon");
const sendPaymentRequestToApi = require("./5-payment");
const expect = require("chai").expect;

describe("sendPaymentRequestToApi", function() {
    beforeEach("configure spy to use for each test", function() {
	    sinon.spy(console, "log");
    });
    afterEach("restore spy after each test", function() {
	    console.log.restore();
    });
    it("check console.log is called using the right arg", function() {
	    sendPaymentRequestToApi(100, 20);

	    expect(console.log.withArgs("Total is: 120").calledOnce).to.be.true;
    });
    it("check console.log is called using the right arg", function() {
	    sendPaymentRequestToApi(10, 10);

	    expect(console.log.withArgs("Total is: 20").calledOnce).to.be.true;
    });
});