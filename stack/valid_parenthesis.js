function validParenthesis(s) {
	const mapping = {
		'}': '{',
		')': '(',
		']': '['
	};
	let charStack = [];
	if (s.length === 0) return false;
	for (let i = 0; i < s.length; i++) {
		let char = s.charAt(i);
		// console.log(char);
		if (mapping[char]) {
			const topElement = charStack.length === 0 ? '#' : charStack.pop();
			if (topElement !== mapping[char]) {
				return false;
			}
		} else {
			charStack.push(char);
		}
	}
	return charStack.length === 0;
}

console.log(validParenthesis('(((())))'));
