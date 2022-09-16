/**
 * TC: O(n^m*m) (brute force)  n= nums.length, m = target
 * SC: O(m) n= nums.length
 * TC: O(n*m^2) (Optimized)
 * SC: O(m^2) (optimized) n= nums.length   
 * @param target: number
 * @param nums: number[]
 * @returns [] 
 */
function howSum(target, nums, memo = {}) {
	if (target in memo) return memo[target];
	if (target === 0) return [];
	if (target < 0) return null;
	for (let num of nums) {
		const diff = target - num;
		const result = howSum(diff, nums);
		if (result !== null) {
			memo[result] = [ ...result, num ];
			return memo[result];
		}
	}
	memo[target] = null;
	return memo[target];
}

console.log(howSum(300, [ 7, 2 ]));
