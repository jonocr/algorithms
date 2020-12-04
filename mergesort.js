function mergesort(numbers) {
	let halfArrayLeft = [];
	let halfArrayRight = [];
	if (numbers.length <= 1) {
		return numbers;
	} else {
		let halfpoint = Math.floor(numbers.length / 2);
		halfArrayLeft = numbers.slice(0, halfpoint);
		halfArrayRight = numbers.slice(halfpoint, numbers.length);
	}
	return merge(mergesort(halfArrayLeft), mergesort(halfArrayRight));
}

function merge(left, right) {
	let sortedArray = [];
	let leftIndex = 0;
	let rightIndex = 0;

	while (leftIndex < left.length && rightIndex < right.length) {
		if (left[leftIndex] < right[rightIndex]) {
			sortedArray.push(left[leftIndex]);
			leftIndex++;
		} else {
			sortedArray.push(right[rightIndex]);
			rightIndex++;
		}
	}

	return sortedArray
		.concat(left.slice(leftIndex))
		.concat(right.slice(rightIndex));
}

const numbers = [16, 4, 2, 7, 1, 3, 5, 8, 9, 10];
console.log("Control: ", numbers);
let result = mergesort(numbers);
console.log("Final: ", result);
