function binarySearch(nums, target) {
	let l = 0;
	let r = nums.length - 1;
	while (l <= r) {
		let midValue = Math.floor((l + r) / 2);
		if (nums[midValue] === target) {
			return true;
		} else if (nums[midValue] > target) {
			r = midValue - 1;
		} else {
			l = midValue + 1;
		}
	}

	return false;
}

console.log(binarySearch([ 1, 3, 4, 5, 6, 7, 9 ], 9));
