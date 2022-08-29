function kokoEatingBanana(piles, h) {
	let l = 1;
	let r = Math.max(...piles);
	console.log(r);
	let res = r;
	while (l <= r) {
		let k = Math.floor((r + l) / 2);
		let hour = 0;
		for (const pile of piles) {
			hour += Math.ceil(pile / k);
		}
		if (hour <= h) {
			res = Math.min(res, k);
			r = k - 1;
		} else {
			l = k + 1;
		}
	}
	return res;
}
console.log(kokoEatingBanana([ 3, 6, 7, 11 ], 8));
