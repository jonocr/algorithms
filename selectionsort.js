// sort array from lowest to highest numbers by finding lowest number in array and moving it first
// then finding the next lowest number and switching next to the previous lowest number
// repeat until all array is sort it

let numeros = [4, 2, 6, 1, 8, 5, 3, 7];
// let numeros = [4, 2, 6, 5, 3];
let selectedNumber;
let lowestNumber;
let lowestNumberIndex;

console.log("Initial Array: ", numeros);

for (let i = 0; i < numeros.length; i++) {
	selectedNumber = numeros[i];
	lowestNumber = numeros[i];
	lowestNumberIndex = i;

	//Finds the lowest number in array starting at index i
	for (let k = i + 1; k < numeros.length; k++) {
		let compareNumber = numeros[k];

		if (compareNumber < lowestNumber) {
			// selectedNumber = numeros[k];
			lowestNumber = numeros[k];
			lowestNumberIndex = k;
		}
	}

	if (lowestNumberIndex != i) {
		numeros[i] = lowestNumber;
		numeros[lowestNumberIndex] = selectedNumber;
	}
}

console.log("Sorted Array: ", numeros);
