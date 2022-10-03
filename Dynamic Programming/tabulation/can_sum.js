function canSum(target, nums) {
	const table = Array(target + 1).fill(false);
	table[0] = true;
	// console.log(table);
	for (let i = 0; i <= target; i++) {
		if (table[i] === true) {
			for (let num of nums) {
				if (num + i <= target) table[i + num] = true;
			}
		}
	}
	return table[target];
}

console.log(canSum(7, [ 2, 3 ]));
console.log(canSum(7, [ 5, 3, 4 ]));
console.log(canSum(7, [ 2, 4 ]));
console.log(canSum(7, [ 5, 3, 4, 7 ]));
console.log(canSum(300, [ 7, 14 ]));
