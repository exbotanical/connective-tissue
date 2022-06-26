import { stringify } from 'flatted';
import { CircularSinglyLinkedList } from '../..';
import { Node } from '..';

import type { InitializedSentinel, Node as NodeType } from '../../types';

import { CircularDoublyLinkedList } from '.';

interface List {
	size: () => number;
}

function checkListSize(list: List, expectedSize: number) {
	const actualSize = list.size();

	return expectedSize == actualSize;
}

const init = () => new CircularDoublyLinkedList<any>();

describe('CircularDoublyLinkedList', () => {
	it('throws an exception when inserting at an invalid node', () => {
		const l = init();

		l.pushFront(new Node(1));
		const at = l.head();

		at!.next = null;

		// todo message
		expect(() => l.insert(new Node(1), at!)).toThrow();
	});

	it('throws an exception when inserting at a non-list node', () => {
		const l = init();

		l.pushFront(new Node(1));
		// todo message
		expect(() => l.insert(new Node(1), new Node(1))).toThrow();
	});

	it('throws an exception when inserting into an empty list', () => {
		const l = init();

		// todo message
		expect(() => l.insert(new Node(1), new Node(1))).toThrow();
	});

	it(`maintains its integrity as a single-node list`, () => {
		const l = init();

		assertRefs(l, []);

		const node = l.pushFront(1);

		assertRefs(l, [node]);

		l.moveToFront(node);
		assertRefs(l, [node]);

		l.moveToBack(node);
		assertRefs(l, [node]);

		l.remove(node);
		assertRefs(l, []);
	});

	it(`maintains its integrity as a multi-node list`, () => {
		const l = init();

		let n2 = l.pushFront(2);
		const n1 = l.pushFront(1);
		const n3 = l.pushBack(3);
		const n4 = l.pushBack('4');

		assertRefs(l, [n1, n2, n3, n4]);

		l.remove(n2);

		assertRefs(l, [n1, n3, n4]);

		l.moveToFront(n3); // move from middle

		assertRefs(l, [n3, n1, n4]);

		l.moveToFront(n1);
		l.moveToBack(n3); // move from middle
		assertRefs(l, [n1, n4, n3]);

		l.moveToFront(n3); // move from tail
		assertRefs(l, [n3, n1, n4]);

		l.moveToFront(n3); // no-op
		assertRefs(l, [n3, n1, n4]);

		l.moveToBack(n3); // move from head
		assertRefs(l, [n1, n4, n3]);

		l.moveToBack(n3); // should be no-op
		assertRefs(l, [n1, n4, n3]);

		n2 = l.insertBefore(2, n1)!; // insert before head
		assertRefs(l, [n2, n1, n4, n3]);

		l.remove(n2);
		n2 = l.insertBefore(2, n4)!; // insert before middle
		assertRefs(l, [n1, n2, n4, n3]);

		l.remove(n2);
		n2 = l.insertBefore(2, n3)!; // insert before tail
		assertRefs(l, [n1, n4, n2, n3]);

		l.remove(n2);
		n2 = l.insertAfter(2, n1)!; // insert after head
		assertRefs(l, [n1, n2, n4, n3]);

		l.remove(n2);
		n2 = l.insertAfter(2, n4)!; // insert after middle
		assertRefs(l, [n1, n4, n2, n3]);

		l.remove(n2);
		n2 = l.insertAfter(2, n3)!; // insert after tail
		assertRefs(l, [n1, n4, n3, n2]);

		l.remove(n2);

		const x = l.pop();

		assertRefs(l, [n1, n4]);
		expect(n3).toBe(x);
	});

	it(`should be iterable`, () => {
		const n1 = 5;
		const n2 = 6;
		const n3 = 12;

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

		assertRefs(l, []);

		expect(actual).toBe(expected);
	});

	it(`should be extensible`, () => {
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
		assertOrder(l3, [1, 2, 3]);
		l3.pushBackList(l2);
		assertOrder(l3, [1, 2, 3, 4, 5]);

		l4.pushFrontList(l2);
		assertOrder(l4, [4, 5]);
		l4.pushFrontList(l1);
		assertOrder(l4, [1, 2, 3, 4, 5]);

		assertOrder(l1, [1, 2, 3]);
		assertOrder(l2, [4, 5]);
	});

	it(`maintains integrity across varietied removals`, () => {
		const l = init();

		const n1 = l.pushBack(1);
		const n2 = l.pushBack(2);

		assertRefs(l, [n1, n2]);

		const n = l.head()!;

		l.remove(n);
		assertRefs(l, [n2]);

		l.remove(n);
		assertRefs(l, [n2]);
	});

	it(`should not be modified when invoking operations upon non-member nodes`, () => {
		const l1 = init();
		const l2 = init();

		l1.pushBack(1);
		l1.pushBack(2);

		l2.pushBack(3);
		l2.pushBack(4);

		const n = l1.head()!;
		l2.remove(n); // l2 should not change because n is not a node of l2

		const s1 = l2.size();
		if (s1 != 2) {
			throw Error(`Have ${s1}, want 2`);
		}

		l1.insertBefore(8, n);

		const s2 = l1.size();
		if (s2 != 3) {
			throw Error(`Have ${s2}, want 3`);
		}
	});

	it(`should maintain integrity across varietied moves`, () => {
		const l = init();

		let n1 = l.pushBack(1);
		let n2 = l.pushBack(2);
		let n3 = l.pushBack(3);
		let n4 = l.pushBack(4);

		l.moveAfter(n3, n3);
		assertRefs(l, [n1, n2, n3, n4]);
		l.moveBefore(n2, n2);
		assertRefs(l, [n1, n2, n3, n4]);

		l.moveAfter(n3, n2);
		assertRefs(l, [n1, n2, n3, n4]);
		l.moveBefore(n2, n3);
		assertRefs(l, [n1, n2, n3, n4]);

		l.moveBefore(n2, n4);
		assertRefs(l, [n1, n3, n2, n4]);
		[n2, n3] = [n3, n2];

		l.moveBefore(n4, n1);
		assertRefs(l, [n4, n1, n2, n3]);
		[n1, n2, n3, n4] = [n4, n1, n2, n3];

		l.moveAfter(n4, n1);
		assertRefs(l, [n1, n4, n2, n3]);
		[n2, n3, n4] = [n4, n2, n3];

		l.moveAfter(n2, n3);
		assertRefs(l, [n1, n3, n2, n4]);
		[n2, n3] = [n3, n2];
	});

	it(`should accommodate static initialization`, () => {
		const sl = CircularDoublyLinkedList.create();

		expect(() => {
			sl.pushFront(9);
		}).not.toThrow();
	});

	it(`is not modified when invoking 'insertBefore' with a mark that is not a node thereof`, () => {
		const l = init();

		l.pushBack(1);
		l.pushBack(2);
		l.pushBack(3);
		l.insertBefore(1, new Node(9));
		assertOrder(l, [1, 2, 3]);
	});

	it(`is not modified when invoking 'insertAfter' with a mark that is not a node thereof`, () => {
		const l = init();

		l.pushBack(1);
		l.pushBack(2);
		l.pushBack(3);
		l.insertAfter(1, new Node(9));
		assertOrder(l, [1, 2, 3]);
	});

	it(`is not modified when invoking 'moveAfter', 'moveBefore' with a mark that is not a node thereof`, () => {
		const l1 = init();
		const l2 = init();

		const n1 = l1.pushBack(1);
		const n2 = l2.pushBack(2);

		l1.moveAfter(n1, n2);
		assertOrder(l1, [1]);
		assertOrder(l2, [2]);

		l1.moveBefore(n1, n2);
		assertOrder(l1, [1]);
		assertOrder(l2, [2]);
	});

	it(`throws an error if provided a list of a different type`, () => {
		const l = init();
		const l2 = new CircularSinglyLinkedList();

		// @ts-expect-error
		expect(() => l.pushBackList(l2)).toThrow();
		// @ts-expect-error
		expect(() => l.pushFrontList(l2)).toThrow();
	});
});

/* refHelpers */

function assertOrder(list: CircularDoublyLinkedList<any>, values: number[]) {
	if (!checkListSize(list, values.length)) return;

	let i = 0;

	for (let n = list.head(); n != null; n = list.next(n)) {
		const val = n.value;

		if (val != values[i]) {
			throw Error(`Have ${val}, want ${values[i]}`);
		}

		i++;
	}
}

function assertRefs(list: CircularDoublyLinkedList<any>, nodes: Node<any>[]) {
	const sentinel = list.sentinel;

	if (!checkListSize(list, nodes.length)) {
		throw Error(`Invalid list size. have ${list.size()}, want ${nodes.length}`);
	}

	// zero-length lists must be the zero value or properly initialized with a sentinel ring
	if (nodes.length == 0) {
		if (
			(list.sentinel.next != null && list.sentinel.next !== sentinel) ||
			(list.sentinel.prev != null && list.sentinel.prev !== sentinel)
		) {
			throw Error(
				`list.sentinel.next is ${stringify(
					list.sentinel.next
				)} and list.sentinel.prev is ${stringify(
					list.sentinel.prev
				)}; both should both be null or ${stringify(sentinel)}`
			);
		}
	}

	for (const [idx, node] of nodes.entries()) {
		let prev: InitializedSentinel<any> | Node<any> | null = list.sentinel;
		let next: InitializedSentinel<any> | Node<any> | null = list.sentinel;

		if (idx > 0) {
			prev = nodes[idx - 1];
		}

		if (node.prev != prev) {
			throw Error(`a) Have ${stringify(node.prev)}, want ${stringify(prev)}`);
		}

		if (idx > 0) {
			if (list.prev(node) != prev)
				throw Error(
					`b) Have ${stringify(list.prev(node))}, want ${stringify(prev)}`
				);
		} else {
			// public interface should return null, not sentinel
			if (list.prev(node) != null)
				throw Error(`b) Have ${stringify(list.prev(node))}, want null`);
		}

		if (idx < nodes.length - 1) {
			next = nodes[idx + 1];
		}

		if (node.next != next) {
			throw Error(`c) Have ${stringify(node.next)}, want ${stringify(next)}`);
		}

		if (idx < nodes.length - 1) {
			if (list.next(node) != next) {
				throw Error(
					`d) Have ${stringify(list.next(node))}, want ${stringify(next)}`
				);
			}
		} else {
			// public interface should return null, not sentinel
			if (list.next(node) != null) {
				throw Error(`d) Have ${stringify(list.next(node))}, want null`);
			}
		}
	}
}
