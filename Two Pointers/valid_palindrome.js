function isNonAlphaNumeric(char) {
	const isAlphabetic = char < 'a' || 'z' < char;
	const isNumeric = char < '0' || '9' < char;
	return isAlphabetic && isNumeric;
}
function isValid(s) {
	let [ l, r ] = [ 0, s.length - 1 ];

	while (l < r) {
		while (l < r && isNonAlphaNumeric(s[l])) l++;
		while (l < r && isNonAlphaNumeric(s[r])) r--;

		const isSame = s[l] === s[r];
		if (!isSame) return false;

		l++;
		r--;
	}
	return true;
}
function validPalindrome(s) {
	if (!s.length) return false;

	s = s.toLowerCase();

	return isValid(s);
}

console.log(validPalindrome('ada'));
