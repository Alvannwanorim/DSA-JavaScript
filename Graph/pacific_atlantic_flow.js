function PacificAtlanticFlow(grid) {
	let res = [];
	let visistedPac = {};
	let visistedAtl = {};

	for (let r = 0; r < grid.length; r++) {
		let col = grid[0].length;
		dfs(grid[r][0], r, 0, visistedPac);
		dfs(grid[r][col - 1], r, col - 1, visistedPac);
	}
	console.log(visistedPac);

	console.log('next');
	for (let c = 0; c < grid[0].length; c++) {
		let row = grid.length;
		dfs(grid[0][c], 0, c, visistedAtl);
		dfs(grid[row - 1][c], row - 1, c, visistedAtl);
	}
	console.log(visistedAtl);
	console.log('final');
	for (let r = 0; r < grid.length; r++) {
		for (let c = 0; c < grid[0].length; c++) {
			let pos = r + ',' + c;
			if (visistedAtl[pos] && visistedPac[pos]) res.push([ r, c ]);
		}
	}

	function dfs(prevHeight, r, c, visited) {
		let rowBound = 0 <= r && r < grid.length;
		let colBound = 0 <= c && c < grid[0].length;

		if (!rowBound || !colBound) return;
		if (grid[r][c] === 0) return;
		if ((grid[r], [ c ] < prevHeight)) return;
		let pos = r + ',' + c;
		if (visited[pos]) return;
		visited[pos] = true;
		dfs(grid[r][c], r - 1, c, visited);
		dfs(grid[r][c], r + 1, c, visited);
		dfs(grid[r][c], r, c - 1, visited);
		dfs(grid[r][c], r, c + 1, visited);
	}

	return res;
}

const grid = [ [ 1, 2, 2, 3, 5 ], [ 3, 2, 3, 4, 4 ], [ 2, 4, 5, 3, 1 ], [ 6, 7, 1, 4, 5 ], [ 5, 1, 1, 2, 4 ] ];

console.log(PacificAtlanticFlow(grid));
