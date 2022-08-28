function dailyTemperature(temp) {
	const range = (start, end, step) => Array.from({ length: end }, (_, i) => start + i * step);
	const res = range(0, temp.length, 0);
	let stack = [];
	for (let i = 0; i < temp.length; i++) {
		while (stack.length && temp[i] > stack[stack.length - 1][0]) {
			const [ lastTemp, lastIndex ] = stack.pop();
			res[lastIndex] = i - lastIndex;
		}
		stack.push([ temp[i], i ]);
	}
	return res;
}

console.log(dailyTemperature([ 23, 24, 24, 25, 27, 26 ]));
