class Node {
	constructor(val, next = null) {
		this.value = val;
		this.next = next;
	}
}
function linkedListCycle(list) {
	let slow = list;
	let fast = list;
	while (fast && fast.next) {
		slow = slow.next;
		fast = fast.next.next;
		if (slow === fast) return true;
	}

	return false;
}

let node1 = new Node(5);
let node2 = new Node(4, node1);
let node3 = new Node(3, node2);
let node4 = new Node(2, node3);
let node5 = new Node(1, node4);
console.log(linkedListCycle(node5));
