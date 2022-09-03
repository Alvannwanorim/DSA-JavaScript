class Node {
	constructor(val, next = null, random = null) {
		this.value = val;
		this.next = next;
		this.random = random;
	}
}

function deepCopy(node) {
	let oldListMap = new Map();
	let curr = node;
	while (curr) {
		oldListMap.set(curr, new Node(curr.value, null, null));
		curr = curr.next;
	}

	curr = node;
	for (const [ oldCurr, newCurr ] of oldListMap) {
		newCurr.next = oldCurr.next && oldListMap.get(oldCurr.next);
		newCurr.random = oldCurr.random && oldListMap.get(oldCurr.random);
	}
	return oldListMap.get(node);
}

let node1 = new Node(5);
let node2 = new Node(4, node1);
let node3 = new Node(3, node2, node1);
let node4 = new Node(2, node3, node3);
let node5 = new Node(1, node4, node2);
console.log(deepCopy(node5));
