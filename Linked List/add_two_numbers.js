class Node {
	constructor(val, next = null) {
		this.value = val;
		this.next = next;
	}
}
function addTwoNumbers(l1, l2) {
	let tmp1 = l1;
	let tmp2 = l2;
	let dummy = new Node(0);
	let merged = dummy;
	let carryOver = 0;
	while (tmp1 || tmp2) {
		let sum = (tmp1.value || 0) + (tmp2.value || 0);
		carryOver = Math.floor(sum / 10);
		sum = sum % 10;
		merged.next = new Node(sum);
		merged = merged.next
		if(tmp1) tmp1 = tmp1?.next
		if(tmp2) tmp2 = tmp2?.next
	}
	if(carryOver>0) merged.next = new Node(carryOver)
}
let node1 = new Node(5);
let node2 = new Node(4, node1);
let node3 = new Node(3, node2);
let node4 = new Node(2, node3);
let node5 = new Node(1, node4);
