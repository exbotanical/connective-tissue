import { Node } from './node';
import { Sentinel } from './terminator';



// [Symbol.iterator]() {
// 	return new Iterator(this.head)
// }

// a list is implemented as a ring, such that the sentinel node is both
// the next node of the tail, and the previous node of
// the head
export function CircularDoublyLinkedList () {
	const l = {
		sentinel: new Sentinel(),
		size: 0 // current list size sans the sentinel node
	};

	l.sentinel.next = l.sentinel;
	l.sentinel.prev = l.sentinel;

	return l;
}


function Next (node) {
	const p = node.next;

	if (p && node.list != null && p != node.list.sentinel) {
		return p;
	}
	console.log(this);
	return null;
}

function Prev (node) {
	const p = node.prev;

	if (p && node.list != null && p != node.list.sentinel) {
		return p;
	}

	return null;
}

function Head (list) {
	if (!list.size) return null;

	return list.sentinel.next;
}

function Tail (list) {
	if (!list.size) return null;

	return list.sentinel.prev;
}

function Insert (list, node, at) {
	node.prev = at;
	node.next = at.next;
	node.prev.next = node;
	node.next.prev = node;

	node.list = list;
	list.size++;

	return node;
}

function Remove (list, node) {
	if (node.list === list) {
		node.prev.next = node.next;
		node.next.prev = node.prev;
		node.next = null;
		node.prev = null;
		node.list = null;
		list.size--;

		return node;
	}

	return node.value;
}

function Move (list, node, at) {
	if (node === at) return node;

	node.prev.next = node.next;
	node.next.prev = node.prev;

	node.prev = at;
	node.next = at.next;
	node.prev.next = node;
	node.next.prev = node;

	return node;
}

function PushFront (list, value) {
	if (!list.sentinel.next) {
		list = new List();
	}

	return InsertValue(list, value, list.sentinel);
}

function PushTail (list, value) {
	if (!list.sentinel.next) {
		list = new List();
	}

	return InsertValue(list, value, list.sentinel.prev);
}

function InsertBefore (list, value, mark) {
	if (mark.list !== list) return null;

	return InsertValue(list, value, mark.prev);
}

function InsertAfter (list, value, mark) {
	if (mark.list !== list) return null;

	return InsertValue(list, value, mark);
}

function MoveToFront (list, node) {
	if (node.list !== list || list.sentinel.next === node) {
		return;
	}

	Move(list, node, list.sentinel);
}

function MoveToBack (list, node) {
	if (node.list !== list || list.sentinel.prev === node) {
		return;
	}

	Move(list, node, list.sentinel.prev);
}

function MoveBefore (list, node, mark) {
	if (node.list !== list || node === mark || mark.list !== list) {
		return;
	}

	Move(list, node, mark.prev);
}

function MoveAfter (list, node, mark) {
	if (node.list !== list || node === mark || mark.list !== list) {
		return;
	}

	Move(list, node, mark);
}

function InsertValue (list, value, at) {
	return Insert(list, new Node(value), at);
}

function PushTailList (list, other) {
	if (!list.sentinel.next) {
		list = new List();
	}

	for (let i = other.size, n = Head(other); i > 0; i--, n = Next(n)) {
		InsertValue(list, n.value, list.sentinel.prev);
	}
}

function PushHeadList (list, other) {
	if (!list.sentinel.next) {
		list = new List();
	}

	for (let i = other.size, n = Tail(other); i > 0; i--, n = Prev(n)) {
		InsertValue(list, n.value, list.sentinel);
	}
}
