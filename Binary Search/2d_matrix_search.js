function matrixSearch(matrix, target) {
	const ROW = matrix.length;
	const COL = matrix[0].length;
	let top = 0;
	let bottom = ROW - 1;
	while (top <= bottom) {
		let row = Math.floor((top + bottom) / 2);
		console.log(matrix[row]);
		if (target > matrix[row][matrix[row].length - 1]) {
			top = row + 1;
		} else if (target < matrix[row][0]) {
			bottom = row - 1;
		} else {
			break;
		}
	}
	if (!(top <= bottom)) return false;
	let row = Math.floor((top + bottom) / 2);
	let l = 0;
	let r = matrix[row].length - 1;
	while (l <= r) {
		let midVal = Math.floor((r + l) / 2);
		if (target > matrix[row][midVal]) {
			l = midVal + 1;
		} else if (target < matrix[row][midVal]) {
			r = midVal - 1;
		} else {
			return true;
		}
	}
	return false;
}

console.log(
	matrixSearch([ [ 1, 2, 3, 4, 5 ], [ 6, 7, 8, 9, 10 ], [ 11, 12, 13, 14, 15 ], [ 16, 17, 18, 19, 20 ] ], 22)
);
