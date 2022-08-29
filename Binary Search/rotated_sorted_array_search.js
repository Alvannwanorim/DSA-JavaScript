function rotatedSortedArraySearch(nums, target) {
	let l = 0;
	let r = nums.length - 1;

	while (l <= r) {
		let mid = Math.floor((r + l) / 2);
		if (target === nums[mid]) {
			return mid;
		}

		if (nums[l] <= nums[mid]) {
			if (target > nums[mid] || target < nums[l]) {
				l = mid + 1;
			} else {
				r = mid - 1;
			}
		} else {
			if (target < nums[mid] || target > nums[r]) {
				r = mid - 1;
			} else {
				l = mid + 1;
			}
		}
	}
	return -1;
}

console.log(rotatedSortedArraySearch([ 5, 6, 7, 8, 1, 2, 3, 4 ], 1));
