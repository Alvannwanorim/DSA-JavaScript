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
function mergeList(l1, l2) {
	let nullNode = { val: 0, next: null };
	let prev = nullNode;
	while (l1 && l2) {
		if (l1.value > l2.value) {
			prev.next = l2;
			l2 = l2.next;
		} else {
			prev.next = l1;
			l1 = l1.next;
		}
		prev = prev.next;
	}
	prev.next = l1 || l2;
	return prev.next;
}
let sll = new LinkedList();
sll.push(1);
sll.push(2);
sll.push(4);
let sl2 = new LinkedList();
sl2.push(3);
sl2.push(5);
sl2.push(6);
console.log(mergeList(sll, sl2));
