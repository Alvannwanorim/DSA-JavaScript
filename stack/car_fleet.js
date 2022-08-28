function carFleet(target, position, speed) {
	let stack = [];

	const combined = position
		.map((item, index) => {
			return [ item, speed[index] ];
		})
		.sort((a, b) => a[0] - b[0]);

	for (let i = combined.length - 1; i > -1; i--) {
		const [ itemPos, itemSpeed ] = combined[i];

		stack.push((target - itemPos) / itemSpeed);

		if (stack.length > 2 && stack[stack.length - 1] <= stack[stack.length - 2]) {
			stack.pop();
		}
	}
	return stack.length;
}

console.log(carFleet(10, [ 2, 3, 4, 5, 6 ], [ 2, 5, 3, 1, 3 ]));
