/**
 * brute force
 * TC: O(n^m * m)  n= wordBank.length, m = target.length
 * SC: O(m^2) n= wordBank.length, m = target.length
 * Optimized
 * TC: O(n*m^2) n= n= wordBank.length, m = target.length
 * SC: O(m^2) n= n= wordBank.length, m = target.length 
 * @param target: string
 * @param wordBank: string[]
 * @returns [] 
 */

function canConstruct(target, wordBank, memo = {}) {
	if (target in memo) return memo[target];
	if (target === '') return true;
	for (let word of wordBank) {
		if (target.indexOf(word) === 0) {
			const suffix = target.slice(word.length);
			if (canConstruct(suffix, wordBank, memo) === true) {
				memo[target] = true;
				return true;
			}
		}
	}
	memo[target] = false;
	return false;
}

console.log(canConstruct('abcdef', [ 'ab', 'abc', 'cd', 'def', 'abcd' ]));

console.log(canConstruct('skateboard', [ 'bo', 'rd', 'ate', 't', 'ska', 'sk', 'boar' ]));
console.log(
	canConstruct('eeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeef', [ 'e', 'ee', 'eee', 'eeee', 'eeeee', 'eeeeee', 'eeeeeee' ])
);
