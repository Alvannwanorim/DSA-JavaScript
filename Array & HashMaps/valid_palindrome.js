function palindrome(s1) {
	// if (s1.length !== s2.length) return false;
	let reverseS1 = '';
	for (let i = s1.length - 1; i >= 0; i--) {
		reverseS1 += s1[i];
	}
	if (reverseS1 === s1) return true;
	return false;
}
console.log(palindrome('stats'));
