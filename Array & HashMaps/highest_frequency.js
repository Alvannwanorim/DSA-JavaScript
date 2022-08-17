function highestFrequency(nums) {
	let freq = 0;
	let hashMap = {};
	for (let i of nums) {
		if (!hashMap[i]) {
			hashMap[i] = 1;
		} else {
			hashMap[i] += 1;
		}
	}
	for (let j in hashMap) {
		freq = Math.max(freq, hashMap[j]);
	}
	return freq;
}

console.log(highestFrequency([ 1, 3, 2, 4, 5, 6, 1 ]));
