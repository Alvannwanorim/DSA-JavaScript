/**
 * TC: O(n^m*m) (brute force)  n= nums.length, m = target
 * SC: O(m) n= nums.length
 * TC: O(n*m^2) (Optimized)
 * SC: O(m^2) (optimized) n= nums.length   
 * @param target: number
 * @param nums: number[]
 * @returns [] 
 */

function bestSum(target, numbers) {
	if (target === 0) return [];
	if (target < 0) return null;

	let shortestCombination = null;
	for (let number of numbers) {
		let diff = target - number;
		const remainder = bestSum(diff, numbers);
		if (remainder !== null) {
			const combination = [ ...remainder, number ];
			if (shortestCombination === null || shortestCombination.length > combination.length) {
				shortestCombination = combination;
			}
		}
	}

	return shortestCombination;
}

console.log(bestSum(7, [ 5, 3, 4 ]));
