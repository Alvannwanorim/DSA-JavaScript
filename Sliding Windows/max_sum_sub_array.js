function maxSumSubArray(nums, k) {
	let maxSum = Number.NEGATIVE_INFINITY;
	let sum = 0;
	for (let i = 0; i < nums.length; i++) {
		sum += nums[i];
		if (i >= k - 1) {
			maxSum = Math.max(maxSum, sum);
			sum -= nums[i - k + 1];
		}
	}
	return maxSum;
}

console.log(maxSumSubArray([ 1, 2, 3, 4, 5, 6, 7, 8 ], 3));
