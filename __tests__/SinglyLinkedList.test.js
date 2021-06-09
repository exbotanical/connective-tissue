import test from 'tape';

import { SinglyLinkedList } from '../lib';

const subject = 'The singly linked list';
const init = () => new SinglyLinkedList();

const refHelper = t => (...args) => {
	try { checkListRefs(...args); }
	catch (msg) { t.fail(msg); }
};

const orderHelper = t => (l, ...v) => {
	try { checkList(l, ...v); }
	catch (msg) { t.fail(msg); }
};

test(`${subject} should shift nodes when inserting a new head node`, t => {
	const tryFail = orderHelper(t);

	const l = init();

	t.equals(l.head, null);
	t.equals(l.size(), 0);

	const n = l.pushFront(9);
	t.equals(l.head, n);
	t.equals(l.head.next, null);
	t.equals(l.size(), 1);

	const n1 = l.pushFront(9);
	t.equals(l.head, n1);
	t.equals(l.head.next, n);
	t.equals(l.size(), 2);

	tryFail(l, [n1, n]);

	t.end();
});

test(`${subject} should shift nodes when inserting a new tail node`, t => {
	const tryFail = orderHelper(t);

	const l = init();

	const n = l.pushBack(9);
	t.equals(l.head, n);
	t.equals(l.head.next, null);
	t.equals(l.size(), 1);

	const l2 = init();

	const n1 = l.pushFront(1);
	const n2 = l.pushFront(2);
	const n4 = l.pushBack(4);
	const n3 = l.pushFront(3);

	tryFail(l2, [n3, n2, n1, n4]);

	t.end();
});

test(`${subject} should maintain integrity across arbitrary inserts`, t => {
	const tryFail = orderHelper(t);
	const tryFail2 = refHelper(t);

	const l = init();

	const n1 = l.pushFront(1);
	const n2 = l.pushFront(2);
	const n4 = l.pushBack(4);
	const n5 = l.pushBack(5);
	const n3 = l.pushFront(3);

	tryFail(l, [n3, n2, n1, n4, n5]);

	const n6 = l.insertAfter(6, n3);
	tryFail(l, [n3, n6, n2, n1, n4, n5]);
	tryFail2(l, [n3, n6, n2, n1, n4, n5]);

	const n7 = l.insertAfter(7, n3);
	const n8 = l.insertAfter(8, n2);
	const n9 = l.insertAfter(9, n5);
	tryFail2(l, [n3, n7, n6, n2, n8, n1, n4, n5, n9]);

	t.end();
});

test(`${subject} should maintain integrity across arbitrary removals`, t => {
	const tryFail = orderHelper(t);
	const tryFail2 = refHelper(t);

	const l = init();

	const n1 = l.pushFront(1);
	const n2 = l.pushFront(2);
	const n4 = l.pushBack(4);
	const n5 = l.pushBack(5);
	const n3 = l.pushFront(3);

	let ns = [n3, n2, n1, n4, n5];
	for (let i = 0; i < l.size(); i++) {
		t.equals(l.removeHead(), ns.shift());
		tryFail(l, ns);
		tryFail2(l, ns);
	}

	const l2 = init();

	const m1 = l2.pushFront(1);
	const m2 = l2.pushFront(2);
	const m4 = l2.pushBack(4);
	const m5 = l2.pushBack(5);
	const m3 = l2.pushFront(3);

	let ms = [m3, m2, m1, m4, m5];

	for (let j = 0; j < l2.size() - 1; j++) {
		t.equals(l2.pop(), ms.pop());
		tryFail(l2, ms);
		tryFail2(l2, ms);
	}

	const l3 = init();

	const k1 = l3.pushFront(1);
	const k2 = l3.pushFront(2);
	const k4 = l3.pushBack(4);
	const k5 = l3.pushBack(5);
	const k3 = l3.pushFront(3);

	l3.remove(k1);
	tryFail(l3, [k3, k2, k4, k5]);
	tryFail2(l3, [k3, k2, k4, k5]);

	l3.remove(k5);
	tryFail(l3, [k3, k2, k4]);
	tryFail2(l3, [k3, k2, k4]);

	l3.remove(k2);
	tryFail(l3, [k3, k4]);
	tryFail2(l3, [k3, k4]);

	l3.remove(k3);
	tryFail2(l3, [k4]);
	t.equals(l3.size(), 1);

	l3.remove(k4);
	tryFail2(l3, []);
	t.equals(l3.size(), 0);

	t.end();
});


/* Helpers */

function checkListSize (list, expectedSize) {
	const actualSize = list.size();

	return expectedSize == actualSize;
}

function checkList (list, ...values) {
	if (!checkListSize(list, values.length)) return;

	let i = 0;

	let n = list.head;

	do {
		n = list.next(n);
		const val = n.value;
		if (val != values[i]) throw `Have ${val}, want ${values[i]}`;
		i++;
	} while (list.next != null);
}

function checkListRefs (list, nodes) {
	if (!checkListSize(list, nodes.length)) throw `len) Have ${list.size()}, want ${nodes.length}`;

	for (const [idx, node] of nodes.entries()) {
		let next = null;

		if (idx < nodes.length - 1) {
			next = nodes[idx + 1];

			if (node.next != next) throw `a) Have ${node.next}, want ${next}`;

			if (list.next(node) != next) throw `b) Have ${list.next(node)}, want ${next}`;
		} else if (idx == nodes.length) {
			if (node.next != null) throw `c) Have ${node.next}, want null`;
		}
	}
}
