function reversePolishNotation(tokens) {
	let stack = [];
	for (const item of tokens) {
		if (item === '*') {
			stack.push(stack.pop() * stack.pop());
		} else if (item === '+') {
			stack.push(stack.pop() + stack.pop());
		} else if (item === '-') {
			let l = stack.pop();
			let r = stack.pop();
			stack.push(r - l);
		} else if (item === '/') {
			let l = stack.pop();
			let r = stack.pop();
			let result = r / l;
			stack.push(Math.floor(result));
		} else {
			stack.push(item);
		}
	}
	return stack[0];
}

console.log(reversePolishNotation([ 2, 3, '+', 4, '*' ]));
