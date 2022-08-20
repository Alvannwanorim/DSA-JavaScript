function containerWithMostWater(nums) {
	let maxArea = 0;
	let l = 0;
	let r = nums.length - 1;
	while (l < r) {
		let area = (r - l) * Math.min(nums[r], nums[l]);
		console.log(area, nums[l], nums[r]);
		maxArea = Math.max(maxArea, area);
		if (nums[l] > nums[r]) {
			r--;
		} else if (nums[l] < nums[r]) {
			l++;
		} else {
			if (nums[l + 1] > nums[r - 1]) r--;
			l++;
		}
	}
	return maxArea;
}

console.log(containerWithMostWater([ 1, 2, 3, 4, 5, 6 ]));
