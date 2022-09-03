class Node {
	constructor(val, next = null, random = null) {
		this.value = val;
		this.next = next;
		this.random = random;
	}
}

function deepCopy(node) {
	let oldListMap = { null: null };
	let curr = node;
	while (curr) {
		let copy = new Node(curr.value);
		oldListMap[curr] = copy;
		curr = curr.next;
	}
	// console.log(oldListMap);
	curr = node;
	while (curr) {
		copy = oldListMap[curr];
		copy.next = oldListMap[curr.next];
		copy.random = oldListMap[curr.random];
		curr = curr.next;
		console.log(copy);
	}
	return oldListMap[node];
}

let node1 = new Node(5);
let node2 = new Node(4, node1);
let node3 = new Node(3, node2, node1);
let node4 = new Node(2, node3, node3);
let node5 = new Node(1, node4, node2);
console.log(deepCopy(node5));
