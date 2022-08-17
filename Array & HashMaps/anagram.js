function anagram(s1, s2) {
	if (s1.length !== s2.length) return false;
	const hash = {};
	for (let i = 0; i < s1.length; i++) {
		if (!hash[s1[i]]) {
			hash[s1[i]] = 1;
		} else {
			hash[s1[i]] += 1;
		}
	}
	for (let j = 0; j < s2.length; j++) {
		if (!hash[s2[j]]) return false;
		hash[s2[j]] -= 1;
	}
	console.log(hash);
	return true;
}

console.log(anagram('weer', 'were'));
