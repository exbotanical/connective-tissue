import test from 'tape';

import { CircularSinglyLinkedList } from '../lib';
import { ForwardNode } from '../lib/atomic';

const subject = 'The circular singly linked list';
const init = () => new CircularSinglyLinkedList();

test(`${subject} (pushBack) should insert a node as the head when the list is empty`, t => {
	const l = init();

	const n = l.pushBack(1);

	t.equals(n.next, l.head);
	t.equals(n, l.head.next);
	t.equals(l.size(), 1);
	t.end();
});


test(`${subject} (pushBack) should insert a node as the last node in a non-empty list`, t => {
	const l = init();

	l.pushBack(1);
	l.pushBack(2);
	l.pushBack(3);
	l.pushBack(4);
	const n = l.pushBack(5);

	t.equals(n.next, l.head);
	t.equals(l.size(), 5);
	t.end();
});

test(`${subject} (pushFront) should insert a node as the head when the list is empty`, t => {
	const l = init();

	const n = l.pushFront(1);

	t.equals(n.next, l.head);
	t.equals(n, l.head.next);
	t.equals(l.size(), 1);
	t.end();
});

test(`${subject} (pushFront) should insert a node as the head in a non-empty list`, t => {
	const l = init();

	l.pushFront(1);
	l.pushFront(2);
	l.pushFront(3);
	l.pushFront(4);
	const n = l.pushFront(5);

	t.equals(n, l.head);
	t.equals(n.next, l.head.next);
	t.equals(l.size(), 5);
	t.end();
});

test(`${subject} returns head and tail`, t => {
	const l = init();

	l.pushFront(1);
	t.equals(l.head.value, 1);
	l.pushFront(2);
	l.pushFront(3);
	l.pushFront(4);
	const n = l.pushFront(5);

	t.equals(n, l.head);
	t.equals(l.head.next.value, 4);
	t.equals(l.prev(l.head).value, 1);
	t.equals(l.size(), 5);

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
	let n3 = l.pushBack(3);
	let n4 = l.pushBack('4');

	tryFail(l, [n1, n2, n3, n4]);

	l.remove(n2);
	tryFail(l, [n1, n3, n4]);

	l.remove(n2);
	tryFail(l, [n1, n3, n4]);

	l.removeHead();
	tryFail(l, [n3, n4]);

	const t1 = l.pop();

	t.equals(t1, n4);
	tryFail(l, [n3]);

	t.equals(l.insertAfter(2, t1), null); // no-op

	t.equals(l.head, l.prev(l.head)); // head = tail

	n2 = l.insertAfter(2, n3) // insert after tail
	tryFail(l, [n3, n2]);
	t.equals(l.prev(l.head), n2);
	t.equals(l.head, n3);

	n4 = l.insertAfter(4, n2) // insert after tail
	tryFail(l, [n3, n2, n4]);
	t.equals(n4.next, l.head);
	t.equals(l.prev(n3), n4);

	let n5 = l.insertAfter(5, n2); // insert after head
	tryFail(l, [n3, n2, n5, n4]);

	l.remove(n2);
	n2 = l.insertAfter(2, n5); // insert after middle
	tryFail(l, [n3, n5, n2, n4]);

	l.remove(n2);
	n2 = l.insertAfter(2, n4); // insert after tail
	tryFail(l, [n3, n5, n4, n2]);

	l.remove(n2);

	l.pop();

	tryFail(l, [n3, n5]);

	t.equals(l.pop(), n5);
	t.equals(l.pop(), n3);
	t.equals(l.pop(), null); // no-op
	t.equals(l.size(), 0);

	t.equals(l.insertBefore(11, n5), null); // no-op

  let m2 = l.pushFront(22);
  let m3 = l.pushBack(33);
	let m1 = l.pushFront(11);

	tryFail(l, [m1, m2, m3]);

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

	let n = l.head;
	do {
		n = l.next(n);
		actual += n.value;
	} while (n !== l.head);


	// clear all nodes via iteration
	let next;

	for (let e = l.head; e != null; e = next) {
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

	l3.pushBackList(l1); // merge into an empty list
	checkList(l3, [1, 2, 3]);
	t.equals(l3.size(), l1.size())

	l3.pushBackList(l2);
	checkList(l3, [1, 2, 3, 4, 5]);

	l4.pushFrontList(l2); // merge into an empty list
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

	const n = l.head;

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

	const n = l1.head;
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

	l.moveAfter(n3, n3); // no-op
	tryFail(l, [n1, n2, n3, n4]);

	l.moveBefore(n2, n2); // no-op
	tryFail(l, [n1, n2, n3, n4]);

	l.moveAfter(n3, n2); // no-op
	tryFail(l, [n1, n2, n3, n4]);

	l.moveBefore(n2, n3); // no-op
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
	const sl = CircularSinglyLinkedList.create();

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
	l.insertBefore(1, new ForwardNode(9));
	checkList(l, [1, 2, 3]);

	t.end();
});

test(`${subject} is not modified when invoking 'insertAfter' with a mark that is not a node thereof` ,t => {
	const l = init();

	l.pushBack(1);
	l.pushBack(2);
	l.pushBack(3);
	l.insertAfter(1, new ForwardNode(9));
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

test(`${subject} is not modified when operations are invoked on an empty list`, t => {
	const l = init();

	l.pushBack();
	l.pushFront();
	l.moveAfter();
	l.moveBefore();
	l.insertAfter();
	l.insertBefore();
	l.next();
	l.prev();
	l.pushFrontList();
	l.pushBackList();
	l.removeHead();
	l.remove();
	l.pop();

	t.end();
});

test(`${subject} maintains integrity when operating upon a single-node list`, t => {
	const tryFail = (t => (...args) => {
		try { checkListRefs(...args); }
		catch (msg) { t.fail(msg); }
	})(t);

	const l = init();

	const n = l.pushFront(1);

	t.equals(l.next(n), n);
	t.equals(l.prev(n), n);
	tryFail(l, [n]);

	const l2 = init();
	const n2 = l2.pushFront(11);
	tryFail(l2, [n2]);

	l.pushFrontList(l2);
	checkList(l, [11, 1]);

	l.pushBackList(l2);
	checkList(l, [11, 1, 11]);

	const l3 = init();

	const n3 = l3.pushFront(1);

	t.equals(l3.next(n3), n3);
	t.equals(l3.prev(n3), n3);
	tryFail(l3, [n3]);

	l3.pushBackList(l2);
	checkList(l3, [11, 1, 11]);

	l3.pushFrontList(l2);
	checkList(l3, [11, 1]);

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

	let n = list.head;
	do {
		n = list.next(n);
		const val = n.value;

		if (val != values[i]) throw `Have ${val}, want ${values[i]}`;
		i++;
	} while (n !== list.head);
}

function checkListRefs (list, nodes) {
	if (!checkListSize(list, nodes.length)) throw `len) Have ${list.size()}, want ${nodes.length}`;

	for (const [idx, node] of nodes.entries()) {
		let prev = null;
		let next = null;

		if (idx > 0) {
			prev = nodes[idx - 1];

			if (node != prev.next) throw `a) Have ${node}, want ${prev.next}`;

			if (list.prev(node) != prev) throw `b) Have ${list.prev(node)}, want ${prev}`;
		}

		if (idx < nodes.length - 1) {
			next = nodes[idx + 1];

			if (node.next != next) throw `c) Have ${node.next}, want ${next}`;

			if (list.next(node) != next) throw `d) Have ${list.next(node)}, want ${next}`;
		}
	}
}
