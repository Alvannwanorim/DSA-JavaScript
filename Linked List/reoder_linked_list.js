class Node {
	constructor(val) {
		this.value = val;
		this.next = null;
	}
}
class LinkedList {
	constructor() {
		this.head = null;
		this.tail = null;
		this.size = 0;
	}
	push(val) {
		const node = new Node(val);
		if (this.size === 0) {
			this.head = node;
			this.tail = node;
		} else {
			const oldTail = this.tail;
			this.tail = node;
			oldTail.next = this.tail;
		}
		this.size += 1;
		return this;
	}
}

function reorder(head) {
	let slow = head;
	let fast = head.next;
	while (fast && fast.next) {
		slow = slow.next;
		fast = fast.next.next;
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

	let first = head;
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
let sll = new LinkedList();
sll.push(1);
sll.push(2);
sll.push(3);
sll.push(4);
sll.push(5);
sll.push(6);

console.log(reorder(sll));
