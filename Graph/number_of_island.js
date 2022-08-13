const numberOfIsLands = (grid) => {
	let visisted = {};
	let count = 0;
	for (let r = 0; r < grid.length; r++) {
		for (let c = 0; c < grid.length; c++) {
			if (islandCount(grid, r, c, visisted)) count++;
		}
	}
	return count;
};
const islandCount = (gird, r, c, visisted) => {
	let rowBound = 0 <= r && r < grid.length;
	let colBound = 0 <= c && c < gird[0].length;

	if (!rowBound || !colBound) return false;
	if (grid[r][c] === 0) return false;

	let pos = r + ',' + c;

	if (visisted[pos]) return false;
	visisted[pos] = true;

	islandCount(grid, r - 1, c, visisted);
	islandCount(grid, r + 1, c, visisted);
	islandCount(grid, r, c - 1, visisted);
	islandCount(grid, r, c + 1, visisted);

	return true;
};
const grid = [
	[ 0, 1, 0, 0, 1 ],
	[ 0, 1, 0, 0, 1 ],
	[ 1, 0, 0, 1, 0 ],
	[ 0, 0, 1, 1, 0 ],
	[ 1, 0, 0, 1, 1 ],
	[ 1, 1, 0, 0, 0 ]
];

// const grid = [ [ 'W', 'l' ], [ 'L' ], [ 'W' ], [ 'W' ], [ 'L' ] ];
console.log(numberOfIsLands(grid));
