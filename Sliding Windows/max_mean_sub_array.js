function maxMeanSubArray(nums, k) {
	let sum = 0;
	let maxMean = Number.NEGATIVE_INFINITY;
	for (let i = 0; i < nums.length; i++) {
		sum += nums[i];
		if (i >= k - 1) {
			let mean = sum / k;
			maxMean = Math.max(maxMean, mean);
			// console.log(maxMean);
			sum -= nums[i - k + 1];
		}
	}
	return maxMean;
}
console.log(maxMeanSubArray([ 1, 2, 4, 5, 6 ], 3));
