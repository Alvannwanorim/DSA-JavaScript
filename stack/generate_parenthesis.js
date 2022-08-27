function generateParenthesis(n) {
	let stack = [];
	let result = [];
	function backtracking(openingCount, closingCount) {
		if (closingCount === n && openingCount === n) {
			result.push(stack.join(''));
			return;
		}

		if (openingCount < n) {
			stack.push('(');
			backtracking(openingCount + 1, closingCount);
			stack.pop();
		}
		if (openingCount > closingCount) {
			stack.push(')');
			backtracking(openingCount, closingCount + 1);
			stack.pop();
		}
	}
	backtracking(0, 0);
	return result;
}

console.log(generateParenthesis(10));
