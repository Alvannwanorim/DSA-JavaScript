function twoNumberSum(nums, target) {
	let l = 0;
	let r = nums.length - 1;
	nums.sort((a, b) => a - b);
	while (l <= r) {
		if (nums[r] + nums[l] === target) {
			return [ nums[r], nums[l] ];
		} else if (nums[r] + nums[l] < target) {
			l++;
		} else {
			r--;
		}
	}
	return -1;
}
console.log(twoNumberSum([ 1, 3, 5, 4, 2, 6 ], 5));
