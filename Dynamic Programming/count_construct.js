function countConstruct(target, wordBank, memo = {}) {
	if (target in memo) return memo[target];
	if (target == '') return 1;
	let totalCount = 0;
	for (const word of wordBank) {
		if (target.indexOf(word) === 0) {
			const numOfCount = countConstruct(target.slice(word.length), wordBank, memo);
			totalCount += numOfCount;
		}
	}
	memo[target] = totalCount;
	return totalCount;
}

console.log(countConstruct('abcdef', [ 'ab', 'abc', 'cd', 'def', 'abcd' ]));

console.log(countConstruct('skateboard', [ 'bo', 'rd', 'ate', 't', 'ska', 'sk', 'boa' ]));
console.log(
	countConstruct('eeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee', [
		'e',
		'ee',
		'eee',
		'eeee',
		'eeeee',
		'eeeeee',
		'eeeeeee'
	])
);
