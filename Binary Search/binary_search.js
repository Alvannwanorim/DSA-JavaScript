function binarySearch(nums, target) {
	let l = 0;
	let r = nums.length - 1;
	while (r >= l) {
		const midVal = Math.floor(r + l) / 2;
		if (nums[midVal] === target) {
			return true;
		} else if (nums[midVal] > target) {
			r = midVal - 1;
		} else {
			l = midVal + 1;
		}
	}
	return false;
}
console.log(binarySearch([ 1, 2, 3, 4, 5, 6, 7 ], 8));
