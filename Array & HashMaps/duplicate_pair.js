function duplicatePair(nums) {
	if (nums.length === 0) return false;
	const hashMap = {};
	for (const num of nums) {
		if (num in hashMap) return true;

		hashMap[num] = true;
	}
	return false;
}

console.log(duplicatePair([ 3, 3, 5, 6, 7 ]));
