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
			const oldtail = this.tail;
			this.tail = node;
			oldtail.next = this.tail;
		}
		this.size += 1;
		return this;
	}
	reverse() {
		const node = this.head;
		this.head = this.tail;
		this.tail = node;
		let next;
		let prev = null;
		for (let i = 0; i < this.size.length; i++) {
			next = node.next;
			node.next = prev;
			prev = node;
			node = node.next;
		}
		return this;
	}
}

let sll = new LinkedList();
sll.push(1);
sll.push(2);
sll.push(3);
console.log(sll.reverse());
