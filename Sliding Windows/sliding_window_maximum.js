function slidingWindowMaximum(nums, k) {
	let queue = [];
	let output = [];
	let r = 0;
	let l = 0;
	while (r < nums.length) {
		while (queue.length && nums[queue.length - 1] > nums[r]) {
			queue.pop();
		}
		queue.push(r);
		//remove the left if its out of bound
		if (l > queue[queue.length - 1]) queue.shift();
		if (r + 1 >= k) {
			output.push(nums[queue[queue.length - 1]]);
			l++;
		}
		r++;
	}
	return output;
}

console.log(slidingWindowMaximum([ 1, 1, -3, 4 ], 3));
