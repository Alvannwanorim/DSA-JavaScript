/**
 * brute force
 * TC: O(n^m * m)  n= nums.length, m = target
 * SC: O(m^2) n= nums.length, m = target
 * Optimized
 * TC: O(n*m^2) n= nums.length, m = target
 * SC: O(m^2) n= nums.length, m = target 
 * @param target: number
 * @param nums: number[]
 * @returns [] 
 */

function bestSum(target, numbers, memo = {}) {
	if (target in memo) return memo[target];
	if (target === 0) return [];
	if (target < 0) return null;

	let shortestCombination = null;
	for (let number of numbers) {
		let diff = target - number;
		const remainder = bestSum(diff, numbers, memo);
		if (remainder !== null) {
			const combination = [ ...remainder, number ];
			if (shortestCombination === null || shortestCombination.length > combination.length) {
				shortestCombination = combination;
			}
		}
	}
	memo[target] = shortestCombination;

	return shortestCombination;
}

console.log(bestSum(7, [ 5, 3, 4 ]));
console.log(bestSum(100, [ 1, 2, 5, 25 ]));
