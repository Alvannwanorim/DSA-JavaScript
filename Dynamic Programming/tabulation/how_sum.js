function howSum(target, numbers) {
	const table = Array(target + 1).fill(null);
	table[0] = [];
	for (let i = 0; i <= target; i++) {
		if (table[i] !== null) {
			for (let num of numbers) {
				table[num + i] = [ ...table[i], num ];
			}
		}
	}
	// console.log(table);
	return table[target];
}

console.log(howSum(7, [ 5, 3, 4 ]));
console.log(howSum(300, [ 7, 14 ]));
