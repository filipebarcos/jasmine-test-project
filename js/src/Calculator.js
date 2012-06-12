function Calculator() {
}

Calculator.prototype.fibonacci = function(index) {
	if (index > 1) {
		return this.fibonacci(index - 1) + this.fibonacci(index - 2)
	}
	
	return index
}

Calculator.prototype.factorial = function(value) {
	if (value > 1) {
		return value * this.factorial(value - 1)
	}
	return 1
}