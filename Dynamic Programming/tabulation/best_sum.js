function bestSum(target, numbers) {
	const table = Array(target + 1).fill(null);
	table[0] = [];
	for (let i = 0; i <= target; i++) {
		if (table[i] !== null) {
			for (let num of numbers) {
				const combination = [ ...table[i], num ];

				if (!table[num + i] || table[num + i].length > combination.length) {
					table[num + i] = [ ...table[i], num ];
				}
			}
		}
	}
	return table[target];
}

console.log(bestSum(7, [ 5, 3, 4 ]));
console.log(bestSum(100, [ 1, 2, 5, 25 ]));
