function longestSubString(s) {
	let l = 0;
	let max = 0;
	let result = new Set();
	for (let i = 0; i < s.length; i++) {
		while (result.has(s[i])) {
			result.delete(s[l]);
			l++;
		}
		result.add(s[i]);
		max = Math.max(max, i - l + 1);
	}
	return max;
}

console.log(longestSubString('abacabcabcd'));
