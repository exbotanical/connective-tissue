import test from 'tape';

import { CircularDoublyLinkedList } from '../lib';
import { Node } from '../lib/atomic';

const subject = 'The circular doubly linked list';
const init = () => new CircularDoublyLinkedList();


test(`${subject} maintains its integrity as a single-node list`, t => {
	const tryFail = (t => (...args) => {
		try { checkListRefs(...args); }
		catch (msg) { t.fail(msg); }
	})(t);

	const l = init();

	tryFail(l, []);

	const node = l.pushFront(1);

	tryFail(l, [node]);

	l.moveToFront(node);
	tryFail(l, [node]);

	l.moveToBack(node);
	tryFail(l, [node]);

	l.remove(node);
	tryFail(l, []);

	t.end();
});

test(`${subject} maintains its integrity as a multi-node list`, t => {
	const tryFail = (t => (...args) => {
		try { checkListRefs(...args); }
		catch (msg) { t.fail(msg); }
	})(t);

	const l = init();

	let n2 = l.pushFront(2);
	let n1 = l.pushFront(1);
	let n3 =l.pushBack(3);
	let n4 = l.pushBack('4');

	tryFail(l, [n1, n2, n3, n4]);


	l.remove(n2);

	tryFail(l, [n1, n3, n4]);

	l.moveToFront(n3) // move from middle

	tryFail(l, [n3, n1, n4]);

	l.moveToFront(n1);
	l.moveToBack(n3) // move from middle
	tryFail(l, [n1, n4, n3]);

	l.moveToFront(n3); // move from tail
	tryFail(l, [n3, n1, n4]);

	l.moveToFront(n3); // no-op
	tryFail(l, [n3, n1, n4]);

	l.moveToBack(n3) // move from head
	tryFail(l, [n1, n4, n3]);

	l.moveToBack(n3); // should be no-op
	tryFail(l, [n1, n4, n3]);

	n2 = l.insertBefore(2, n1) // insert before head
	tryFail(l, [n2, n1, n4, n3]);

	l.remove(n2);
	n2 = l.insertBefore(2, n4); // insert before middle
	tryFail(l, [n1, n2, n4, n3]);

	l.remove(n2);
	n2 = l.insertBefore(2, n3) // insert before tail
	tryFail(l, [n1, n4, n2, n3]);

	l.remove(n2);
	n2 = l.insertAfter(2, n1); // insert after head
	tryFail(l, [n1, n2, n4, n3]);

	l.remove(n2);
	n2 = l.insertAfter(2, n4); // insert after middle
	tryFail(l, [n1, n4, n2, n3]);

	l.remove(n2);
	n2 = l.insertAfter(2, n3); // insert after tail
	tryFail(l, [n1, n4, n3, n2]);

	l.remove(n2);
	const x = l.pop();
	tryFail(l, [n1, n4]);
	t.equals(n3, x);

	t.end();
});

test(`${subject} should be iterable`, t => {
	const tryFail = (t => (...args) => {
		try { checkListRefs(...args); }
		catch (msg) { t.fail(msg); }
	})(t);

	const n1 = 5,
				n2 = 6,
				n3 = 12;

	const expected = n1 + n2 + n3;
	let actual = 0;

	const l = init();

	l.pushFront(n1);
	l.pushFront(n2);
	l.pushFront(n3);

	for (let n = l.head(); n != null; n = l.next(n)) {
		actual += n.value;
	}

	// clear all nodes via iteration
	let next;

	for (let e = l.head(); e != null; e = next) {
		next = l.next(e);
		l.remove(e);
	}

	tryFail(l, []);

	t.equals(actual, expected);
	t.end();
});

test(`${subject} should be extensible`, t => {
	const l1 = init();
	const l2 = init();
	const l3 = init();
	const l4 = init();

	l1.pushBack(1);
	l1.pushBack(2);
	l1.pushBack(3);

	l2.pushBack(4);
	l2.pushBack(5);

	l3.pushBackList(l1);
	checkList(l3, [1, 2, 3]);
	l3.pushBackList(l2);
	checkList(l3, [1, 2, 3, 4, 5]);

	l4.pushFrontList(l2);
	checkList(l4, [4, 5]);
	l4.pushFrontList(l1);
	checkList(l4, [1, 2, 3, 4, 5]);

	checkList(l1, [1, 2, 3]);
	checkList(l2, [4, 5]);
	t.end();
});

test(`${subject} maintains integrity across varietied removals`, t => {
	const tryFail = (t => (...args) => {
		try { checkListRefs(...args); }
		catch (msg) { t.fail(msg); }
	})(t);

	const l = init();

	const n1 = l.pushBack(1);
	const n2 = l.pushBack(2);

	tryFail(l, [n1, n2]);

	const n = l.head();

	l.remove(n);
	tryFail(l, [n2]);

	l.remove(n);
	tryFail(l, [n2]);

	t.end();
});

test(`${subject} should not be modified when invoking operations upon non-member nodes`, t => {
	const l1 = init();
	const l2 = init();

	l1.pushBack(1);
	l1.pushBack(2);

	l2.pushBack(3);
	l2.pushBack(4);

	const n = l1.head();
	l2.remove(n); // l2 should not change because n is not a node of l2

	const s1 = l2.size();
	if (s1 != 2) t.fail(`Have ${s1}, want 2`);

	l1.insertBefore(8, n);

	const s2 = l1.size();
	if (s2 != 3) t.fail(`Have ${s2}, want 3`);

	t.end();
});

test(`${subject} should maintain integrity across varietied moves`, t => {
	const tryFail = (t => (...args) => {
		try { checkListRefs(...args); }
		catch (msg) { t.fail(msg); }
	})(t);

	const l = init();

	let n1 = l.pushBack(1);
	let n2 = l.pushBack(2);
	let n3 = l.pushBack(3);
	let n4 = l.pushBack(4);

	l.moveAfter(n3, n3);
	tryFail(l, [n1, n2, n3, n4]);
	l.moveBefore(n2, n2);
	tryFail(l, [n1, n2, n3, n4]);

	l.moveAfter(n3, n2);
	tryFail(l, [n1, n2, n3, n4]);
	l.moveBefore(n2, n3);
	tryFail(l, [n1, n2, n3, n4]);

	l.moveBefore(n2, n4);
	tryFail(l, [n1, n3, n2, n4]);
	[n2, n3] = [n3, n2];

	l.moveBefore(n4, n1);
	tryFail(l, [n4, n1, n2, n3]);
	[n1, n2, n3, n4] = [n4, n1, n2, n3];

	l.moveAfter(n4, n1);
	tryFail(l, [n1, n4, n2, n3]);
	[n2, n3, n4] = [n4, n2, n3];

	l.moveAfter(n2, n3);
	tryFail(l, [n1, n3, n2, n4]);
	[n2, n3] = [n3, n2];

	t.end();
});


test(`${subject} should accommodate static initialization`, t => {
	const sl = CircularDoublyLinkedList.create();

	t.doesNotThrow(() => {
		sl.pushFront(9);
	});
	t.end();
});

test(`${subject} is not modified when invoking 'insertBefore' with a mark that is not a node thereof` , t => {
	const l = init();

	l.pushBack(1);
	l.pushBack(2);
	l.pushBack(3);
	l.insertBefore(1, new Node(9));
	checkList(l, [1, 2, 3]);

	t.end();
});

test(`${subject} is not modified when invoking 'insertAfter' with a mark that is not a node thereof` ,t => {
	const l = init();

	l.pushBack(1);
	l.pushBack(2);
	l.pushBack(3);
	l.insertAfter(1, new Node(9));
	checkList(l, [1, 2, 3]);

	t.end();
});

test(`${subject} is not modified when invoking 'moveAfter', 'moveBefore' with a mark that is not a node thereof` ,t => {
	const l1 = init();
	const l2 = init();

	const n1 = l1.pushBack(1);
	const n2 = l2.pushBack(2);

	l1.moveAfter(n1, n2);
	checkList(l1, [1]);
	checkList(l2, [2]);

	l1.moveBefore(n1, n2);
	checkList(l1, [1]);
	checkList(l2, [2]);

	t.end();
});

/* Helpers */

function checkListSize (list, expectedSize) {
	const actualSize = list.size();

	return expectedSize == actualSize;
}

function checkList(list, ...values) {
	if (!checkListSize(list, values.length)) return;

	let i = 0;

	for (let n = list.head(); n != null; n = list.next(n)) {
		const val = n.value;

		if (val != values[i]) throw `Have ${val}, want ${values[i]}`;
		i++;
	}
}

function checkListRefs (list, nodes) {
	const sentinel = list.sentinel;

	if (!checkListSize(list, nodes.length)) return false;

	// zero-length lists must be the zero value or properly initialized with a sentinel ring
	if (nodes.length == 0) {
		if (
			(list.sentinel.next != null && list.sentinel.next !== sentinel) ||
			(list.sentinel.prev != null && list.sentinel.prev !== sentinel)
		) throw `list.sentinel.next is ${list.sentinel.next} and list.sentinel.prev is ${list.sentinel.prev}; both should both be null or ${sentinel}`;
	}

	for (const [idx, node] of nodes.entries()) {
		let prev = list.sentinel;
		let next = list.sentinel;

		if (idx > 0) prev = nodes[idx - 1];

		if (node.prev != prev) throw `a) Have ${node.prev}, want ${prev}`;

		if (idx > 0) {
			if (list.prev(node) != prev) throw `b) Have ${list.prev(node)}, want ${prev}`;
		} else {
			// public interface should return null, not sentinel
			if (list.prev(node) != null) throw `b) Have ${list.prev(node)}, want null`;
		}

		if (idx < nodes.length - 1) next = nodes[idx + 1];

		if (node.next != next) throw `c) Have ${node.next}, want ${next}`;

		if (idx < nodes.length - 1) {
			if (list.next(node) != next) throw `d) Have ${list.next(node)}, want ${next}`;
		} else {
			// public interface should return null, not sentinel
			if (list.next(node) != null) throw `d) Have ${list.next(node)}, want null`;
		}
	}
}
