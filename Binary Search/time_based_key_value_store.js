class KeyStore {
	constructor() {
		this.store = {};
	}
	set(key, value, timeStamp) {
		if (!this.store[key]) {
			this.store[key] = [];
		}
		this.store[key].push([ value, timeStamp ]);
		return this;
	}
	get(key, timeStamp) {
		let res = '';
		if (!this.store[key]) {
			return null;
		}
		let values = this.store[key];
		let l = 0;
		let r = values.length - 1;
		while (l <= r) {
			let mid = Math.floor((r + l) / 2);

			if (values[mid][1] <= timeStamp) {
				res = values[mid][0];
				l = mid + 1;
			} else {
				r = mid - 1;
			}
		}
		return res;
	}
}
let keyStore = new KeyStore();
keyStore.set('foo', 'bar', 1);
keyStore.set('foo', 'bar bar', 2);
keyStore.set('foo', 'long', 3);
keyStore.set('foo', 'shot', 4);

console.log(keyStore.get('foo', 5));
// console.log(keyStore.set('foo', 'bar', 1));
