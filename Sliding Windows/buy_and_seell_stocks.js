function buyAndSellStocks(prices) {
	let maxProfit = Number.NEGATIVE_INFINITY;
	let l = 0;
	let r = 1;
	while (r < prices.length) {
		if (prices[l] < prices[r]) {
			let profit = prices[r] - prices[l];
			maxProfit = Math.max(maxProfit, profit);
		} else {
			l = r;
		}
		r++;
	}
	return maxProfit;
}
console.log(buyAndSellStocks([ 6, 3, 4, 8, 8 ]));
