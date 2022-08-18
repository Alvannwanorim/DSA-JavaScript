function linearSearch(nums, target) {
	for (let i of nums) {
		if (i === target) return true;
	}

	return false;
}

console.log(linearSearch([ 1, 3, 5, 6, 7 ], 2));
