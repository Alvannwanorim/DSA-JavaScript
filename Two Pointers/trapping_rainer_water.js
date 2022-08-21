function trappingRain(heights) {
	let l = 0;
	let r = heights.length - 1;
	let maxL = heights[l];
	let maxR = heights[r];
	let res = 0;
	while (l < r) {
		if (maxL < maxR) {
			l++;
			maxL = Math.max(maxL, heights[l]);
			res += maxL - heights[l];
		} else {
			r--;
			maxR = Math.max(maxR, heights[r]);
			res += maxR - heights[r];
		}
	}
	return res;
}

console.log(trappingRain([ 1, 6, 0, 1, 0, 7, 2 ]));
