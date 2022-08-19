function twoNumbersSum(nums, target) {
	let hashMap = new Set();
	for (let num of nums) {
		const diff = target - num;
		if (hashMap.has(diff)) return [ num, diff ];
		hashMap.add(num);
	}

	return -1;
}
console.log(twoNumbersSum([ 1, 2, 4, 5, 6, 6 ], 3));
