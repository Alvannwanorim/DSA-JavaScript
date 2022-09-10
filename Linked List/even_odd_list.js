class Node {
	constructor(val, next = null) {
		this.value = val;
		this.next = next;
	}
}

function evenAndOddList(node) {
	if (node === null) {
		return null;
	}

	let odd = node;
	let even = odd.next;
	let hEven = even;

	while (even && even.next) {
		odd.next = even.next;
		odd = even.next;
		even.next = odd.next;
		even = even.next;
	}
	odd.next = hEven;
	return node;
}
