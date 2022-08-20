function threeNumberSum(nums, traget) {
	let res = [];
	let l = 0;
	let r = nums.length - 1;
	nums.sort((a, b) => a - b);
	for (let i = 0; i < nums.length; i++) {
		if (nums[i] === nums[i - 1]) continue;

		l = i + 1;
		r = nums.length - 1;
		let tmp = 0;
		while (l < r) {
			tmp = nums[i] + nums[l] + nums[r];
			if (tmp === 0) {
				res.push([ nums[i], nums[l], nums[r] ]);
				l++, r--;

				while (nums[l] == nums[l - 1]) {
					l++;
				}
				while (nums[r] == nums[r + 1]) {
					r--;
				}
			} else if (tmp > 0) {
				r--;
			} else {
				l++;
			}
		}
	}
	return res;
}

console.log(threeNumberSum([ -1, 0, 1, 2, -1, -4 ]));
