class Minstack {
	constructor() {
		this.stack = [];
		this.minstack = [];
	}
	push(val) {
		this.stack.push(val);
		if (this.minstack.length === 0 || val <= this.minstack[this.minstack.length - 1]) {
			this.minstack.push(val);
		}
	}
	pop() {
		let val = this.stack.pop();
		if (val === this.minstack[this.minstack.length - 1]) this.minstack.pop();
	}
	top() {
		return this.stack[this.stack.length - 1];
	}
	getMin() {
		return this.minstack[this.minstack.length - 1];
	}
}

let minStack = new Minstack();
minStack.push(1);
minStack.push(-3);
minStack.push(3);
minStack.push(5);
minStack.push(9);
minStack.push(0);
minStack.push(22);
console.log(minStack.getMin());
