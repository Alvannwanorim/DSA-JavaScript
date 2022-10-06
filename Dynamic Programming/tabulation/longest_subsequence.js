function longestSubsequence(num) {
	const table = Array(num.length).fill(1);

	for (let i = num.length - 1; i >= 0; i--) {
		for (let j = i + 1; j < num.length; j++) {
			// console.log(j);
			if (num[i] < num[j]) {
				table[i] = Math.max(table[i], 1 + table[j]);
			}
		}
	}
	// console.log(table);
	return Math.max(...table);
}

console.log(longestSubsequence([ 10, 9, 2, 5, 3, 7, 101, 18 ]));
