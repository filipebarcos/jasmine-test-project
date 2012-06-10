describe("Calculator", function() {

	var calculator;

	beforeEach(function() {
		calculator = new Calculator();
	});

	it("should calculate 5th fibonacci sequence number", function () {
		expect(calculator.fibonacci(5)).toBe(5);
	});

	it("should calculate factorial of 5", function() {
		expect(calculator.factorial(5)).toBe(120)
	});
});