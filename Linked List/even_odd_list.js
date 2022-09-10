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

	odd = node;
	even = odd.next;
	hEven = even;

	while (even && even.next) {}
}
