describe("Fibonacci", function() {

	var fibonacci;

	beforeEach(function() {
		fibonacci = new Fibonacci();
	});

	it("should calculate 5th fibonacci sequence number", function () {
		expect(fibonacci.execute(5)).toBe(5);
	});

});