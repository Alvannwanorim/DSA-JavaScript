function allConstruct(target, wordBank) {
	const table = Array(target.length + 1).fill().map(() => []);
	table[0] = [ [] ];
	for (let i = 0; i < target.length; i++) {
		for (let word of wordBank) {
			if (target.slice(i, i + word.length) === word) {
				const newCombo = table[i].map((sub) => [ ...sub, word ]);
				table[i + word.length].push(...newCombo);
			}
		}
	}
	const result =table[target.length].map(arr=> arr.join(" "))
	return result;
}

console.log(allConstruct('abcdef', [ 'ab', 'abc', 'cd', 'def', 'abcd', 'ef', 'c' ]));
// console.log(allConstruct('skateboard', [ 'bo', 'rd', 'ate', 't', 'ska', 'sk', 'boa' ]));
// console.log(allConstruct('eeeeeeeeeeeeee', [ 'e', 'ee', 'eee', 'eeee', 'eeeee', 'eeeeee', 'eeeeeee' ]));
