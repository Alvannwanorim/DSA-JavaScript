function allConstruct(target, wordBank, memo = {}) {
	if (target in memo) return memo[target];
	if (target === '') return [ [] ];
	let list = [];
	for (const word of wordBank) {
		if (target.indexOf(word) === 0) {
			let constructs = allConstruct(target.slice(word.length), wordBank);
			let targetWays = constructs.map((way) => [ word, ...way ]);
			list.push(...targetWays);
		}
	}
	memo[target] = list;
	return list;
}

console.log(allConstruct('abcdef', [ 'ab', 'abc', 'cd', 'def', 'abcd', 'ef', 'c' ]));
console.log(allConstruct('skateboard', [ 'bo', 'rd', 'ate', 't', 'ska', 'sk', 'boa' ]));
console.log(allConstruct('eeeeeeeeeeeeee', [ 'e', 'ee', 'eee', 'eeee', 'eeeee', 'eeeeee', 'eeeeeee' ]));
