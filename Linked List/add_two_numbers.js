class Node {
	constructor(val, next = null) {
		this.value = val;
		this.next = next;
	}
}

let node1 = new Node(5);
let node2 = new Node(4, node1);
let node3 = new Node(3, node2);
let node4 = new Node(2, node3);
let node5 = new Node(1, node4);
