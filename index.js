function mergeSort(array) {
	if (array.length <= 1) {
		return array;
	}

	const middle = Math.floor(array.length / 2);

	const left = mergeSort(array.slice(0, middle));
	const right = mergeSort(array.slice(middle));

	return merge(left, right);
}

function merge(left, right) {
	const result = [];

	let i = 0;
	let j = 0;

	while (i < left.length && j < right.length) {
		if (left[i] < right[j]) {
			result.push(left[i]);
			i++;
		} else {
			result.push(right[j]);
			j++;
		}
	}

	while (i < left.length) {
		result.push(left[i]);
		i++;
	}

	while (j < right.length) {
		result.push(right[j]);
		j++;
	}

	return result;
}

// const array = [6, 4, 5, 1, 7, 6, 9, 10];

// console.log(`Исходный массив: ${array}`);
// console.log(`Отсортированный массив: ${mergeSort(array)}`);

function binarySearch(array, target) {
	let left = 0;
	let right = array.length - 1;

	while (left <= right) {
		const middle = Math.floor((left + right) / 2);

		if (array[middle] === target) {
			return middle;
		}

		if (array[middle] < target) {
			left = middle + 1;
		} else {
			right = middle - 1;
		}
	}

	return -1;
}

// const sortedArray = [1, 2, 3, 4, 5, 6, 7, 8, 9];

// console.log(`Массив: ${sortedArray}`);
// console.log(`Индекс числа 7: ${binarySearch(sortedArray, 7)}`);
// console.log(`Индекс числа 10: ${binarySearch(sortedArray, 10)}`);

function isBalanced(str) {
	const stack = [];

	const openingBrackets = ['(', '[', '{', '<'];

	const pairs = {
		')': '(',
		']': '[',
		'}': '{',
		'>': '<'
	};

	for (const char of str) {
		if (openingBrackets.indexOf(char) !== -1) {
			stack.push(char);
		} else if (pairs[char] != null) {
			if (stack.length === 0) {
				return false;
			}

			const lastBracket = stack.pop();

			if (lastBracket !== pairs[char]) {
				return false;
			}
		}
	}

	return stack.length === 0;
}

// console.log(isBalanced("({})")); // true
// console.log(isBalanced("({)}")); // false
// console.log(isBalanced("([]{})")); // true
// console.log(isBalanced("([<>])")); // true
// console.log(isBalanced("(((")); // false
// console.log(isBalanced("())")); // false
// console.log(isBalanced("{[()]}")); // true
