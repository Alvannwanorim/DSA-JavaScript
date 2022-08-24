function longestStringReplacement(s, k) {
	if (s.length === 0) return undefined;
	let hash = {};
	let max = 0;
	let values;
	let l = 0;
	for (let r = 0; r < s.length; r++) {
		if (hash[s[r]]) {
			hash[s[r]] += 1;
		} else {
			hash[s[r]] = 1;
		}
		values = Object.values(hash);
		while (r - l + 1 - Math.max(...values) > k) {
			hash[s[l]] -= 1;
			l++;
		}
		max = Math.max(max, r - l + 1);
	}
	return max;
}

console.log(longestStringReplacement('ABACCC', 2));
