function largetRectInHisto(heights) {
	let maxArea = 0;
	let stack = [];

	for (let i = 0; i < heights.length; i++) {
		let newIndex = i;
		while (stack.length && stack[stack.length - 1][1] > heights[i]) {
			const [ index, height ] = stack.pop();
			maxArea = Math.max(maxArea, height * (i - index));
			newIndex = index;
		}
		stack.push([ newIndex, heights[i] ]);
	}

	console.log(maxArea, stack);
	for (let j = 0; j < stack.length; j++) {
		let currArea = stack[j][1] * (heights.length - stack[j][0]);

		maxArea = Math.max(maxArea, currArea);
	}

	return maxArea;
}

console.log(largetRectInHisto([ 1, 3, 4, 2, 1 ]));
