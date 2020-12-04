function collatz(n) {
	console.log(n);
	if (n == 1) return 0;
	if (n % 2 == 0) {
		return collatz(n / 2);
	} else {
		return collatz(3 * n + 1);
	}
}

collatz(6);
