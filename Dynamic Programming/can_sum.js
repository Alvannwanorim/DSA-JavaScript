function canSum(target, numbers) {
	if (target === 0) return true;
	if (target < 0) return false;
	for (let num of numbers) {
		let diff = target - num;
		if (canSum(diff, numbers) === true) return true;
	}
	return false;
}

console.log(canSum(1, [ 2, 3, 5, 6, 7, 8 ]));
