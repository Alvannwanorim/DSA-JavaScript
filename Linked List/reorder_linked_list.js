class Node {
	constructor(val) {
		this.value = val;
		this.next = null;
	}
}

function reorder(list) {
	let slow = head;
	let fast = head.next;
	while (fast && fast.next) {
		slow = slow.next;
		fast = fast.next.next;
		// console.log(slow, 'Ad', fast);
	}

	let second = slow.next;
	slow.next = null;
	let prev = null;
	while (second) {
		let temp = second.next;
		second.next = prev;
		prev = second;
		second = temp;
	}
	let first = list.head;
	second = prev;
	while (second) {
		let temp1 = first.next;
		let temp2 = second.next;
		first.next = second;
		second.next = temp1;
		first = temp1;
		second = temp2;
	}
	return first;
}

let node1 = new Node(5);
let node2 = new Node(4, node1);
let node3 = new Node(3, node2);
let node4 = new Node(2, node3);
let node5 = new Node(1, node4);

console.log(reorder(node5));
