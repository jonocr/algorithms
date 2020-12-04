// let numbers = [4, 2, 6, 1, 8, 5, 3, 7];

let numbers = [1, 3, 2, 4, 5, 6, 7, 8];

console.log("Initial Array: ", numbers);
let loops = numbers.length;
// let numeros = [4, 2, 6, 5, 3];
let leftNumber;
let rightNumber;

let lowestNumber;
let notSwap;

let counter = 0;
for (let k = 0; k < loops - 1; k++) {
	notSwap = true;
	for (let i = 0; i < loops; i++) {
		leftNumber = numbers[i];
		rightNumber = numbers[i + 1];

		if (leftNumber > rightNumber) {
			lowestNumber = rightNumber;

			//switch numbers order
			numbers[i + 1] = numbers[i];
			numbers[i] = lowestNumber;
			notSwap = false;
		}
	}
	counter += 1;
	if (notSwap) {
		loops = 0;
		k = numbers.length;
	} else {
		loops -= 1;
	}
}

console.log("Sorted Array: ", numbers);
