function allSum(target, numbers) {
	const table = Array(target + 1).fill().map(() => []);
	table[0] = [ [] ];
	for (let i = 0; i <= target; i++) {
		for (let num of numbers) {
			const newCombo = table[i].map((sub) => [ ...sub, num ]);
			if (i + num <= target) table[i + num].push(...newCombo);
		}
	}
	return table[target];
}
console.log(allSum(5, [ 1, 2, 5 ]));
