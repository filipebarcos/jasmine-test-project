function Calculator() {
}

Calculator.prototype.fibonacci = function(value) {
	if (value != 1 && value != 0 && value != 2) {
		return this.fibonacci(value - 1) + this.fibonacci(value - 2);
	}
	return 1;
}

Calculator.prototype.factorial = function(value) {
	if (value > 1) {
		return value * this.factorial(value - 1);
	}
	return 1;
}