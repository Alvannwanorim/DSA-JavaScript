function canSum(target, numbers, memo = {}) {
	if (target in memo) return memo[target];
	if (target === 0) return true;
	if (target < 0) return false;
	for (let num of numbers) {
		let diff = target - num;
		if (canSum(diff, numbers, memo) === true) {
			memo[target] = true;
			return true;
		}
	}
	memo[target] = false;
	return false;
}

console.log(canSum(300, [ 7, 14 ]));
