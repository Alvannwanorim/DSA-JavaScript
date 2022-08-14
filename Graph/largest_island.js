function largestIsland(grid) {
	let visited = {};
	let maxIsland = Number.NEGATIVE_INFINITY;
	for (let r = 0; r < grid.length; r++) {
		for (let c = 0; c < grid.length; c++) {
			let size = explore(grid, r, c, visited);
			// console.log(size);
			if (size > 0) {
				maxIsland = Math.max(size, maxIsland);
			}
		}
	}
	return maxIsland;
}
function explore(grid, r, c, visited) {
	let count = 1;
	const rowBound = 0 <= r && r < grid.length;
	const colBound = 0 <= c && c < grid[0].length;
	const pos = r + ',' + c;
	if (!rowBound || !colBound) return 0;
	if (grid[r][c] === 0) return 0;
	if (visited[pos]) return 0;
	visited[pos] = true;
	count += explore(grid, r - 1, c, visited);
	count += explore(grid, r + 1, c, visited);
	count += explore(grid, r, c - 1, visited);
	count += explore(grid, r, c + 1, visited);

	return count;
}
const grid = [
	[ 0, 1, 0, 0, 1 ],
	[ 0, 1, 0, 0, 1 ],
	[ 1, 0, 0, 1, 0 ],
	[ 0, 0, 1, 1, 0 ],
	[ 1, 0, 0, 1, 1 ],
	[ 1, 1, 0, 1, 0 ]
];

console.log(largestIsland(grid));
