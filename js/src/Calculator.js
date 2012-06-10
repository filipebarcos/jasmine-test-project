function Fibonacci() {
}

Fibonacci.prototype.execute = function(value) {
	if (value != 1 && value != 0 && value != 2) {
		return this.execute(value - 1) + this.execute(value - 2);
	}
	return 1;
};