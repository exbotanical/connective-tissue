import { CircularDoublyLinkedList } from '../circular-doubly-linked-list';
import { CircularSinglyLinkedList } from '.';
import { CircularSinglyLinkedListNode } from '..';

interface List {
	size: () => number;
}

function checkListSize(list: List, expectedSize: number) {
	const actualSize = list.size();

	return expectedSize == actualSize;
}

const subject = 'The circular singly linked list';
const init = () => new CircularSinglyLinkedList<any>();

describe('CircularSinglyLinkedList', () => {
	it(`${subject} (pushBack) should insert a node as the head when the list is empty`, () => {
		const l = init();

		const n = l.pushBack(1);
		expect(n.next).toBe(l.head);
		expect(n).toBe(l.head?.next);
		expect(l.size()).toBe(1);
	});

	it(`${subject} (pushBack) should insert a node as the last node in a non-empty list`, () => {
		const l = init();

		l.pushBack(1);
		l.pushBack(2);
		l.pushBack(3);
		l.pushBack(4);

		const n = l.pushBack(5);
		expect(n.next).toBe(l.head);
		expect(l.size()).toBe(5);
	});

	it(`${subject} (pushFront) should insert a node as the head when the list is empty`, () => {
		const l = init();

		const n = l.pushFront(1);

		expect(n.next).toBe(l.head);
		expect(n).toBe(l.head?.next);
		expect(l.size()).toBe(1);
	});

	it(`${subject} (pushFront) should insert a node as the head in a non-empty list`, () => {
		const l = init();

		l.pushFront(1);
		l.pushFront(2);
		l.pushFront(3);
		l.pushFront(4);
		const n = l.pushFront(5);

		expect(n).toBe(l.head);
		expect(n.next).toBe(l.head?.next);
		expect(l.size()).toBe(5);
	});

	it(`${subject} returns head and tail`, () => {
		const l = init();

		l.pushFront(1);
		expect(l.head?.value).toBe(1);
		l.pushFront(2);
		l.pushFront(3);
		l.pushFront(4);

		const n = l.pushFront(5);
		expect(n).toBe(l.head);
		expect(l.head?.next?.value).toBe(4);
		expect(l.prev(l.head!)?.value).toBe(1);
		expect(l.size()).toBe(5);
	});

	it(`${subject} maintains its integrity as a multi-node list`, () => {
		const l = init();

		let n2 = l.pushFront(2);
		const n1 = l.pushFront(1);
		const n3 = l.pushBack(3);
		let n4 = l.pushBack('4');

		assertRefs(l, [n1, n2, n3, n4]);

		l.remove(n2);
		assertRefs(l, [n1, n3, n4]);

		l.remove(n2);
		assertRefs(l, [n1, n3, n4]);

		l.removeHead();
		assertRefs(l, [n3, n4]);

		const t1 = l.pop();

		expect(t1).toBe(n4);
		assertRefs(l, [n3]);

		expect(l.insertAfter(2, t1!)).toBe(null); // no-op

		expect(l.head).toBe(l.prev(l.head!)); // head == tail

		n2 = l.insertAfter(2, n3)!; // insert after tail
		assertRefs(l, [n3, n2]);
		expect(l.prev(l.head!)).toBe(n2);
		expect(l.head).toBe(n3);

		n4 = l.insertAfter(4, n2)!; // insert after tail
		assertRefs(l, [n3, n2, n4]);
		expect(n4.next).toBe(l.head);
		expect(l.prev(n3)).toBe(n4);

		const n5 = l.insertAfter(5, n2)!; // insert after head
		assertRefs(l, [n3, n2, n5, n4]);

		l.remove(n2);
		n2 = l.insertAfter(2, n5)!; // insert after middle
		assertRefs(l, [n3, n5, n2, n4]);

		l.remove(n2);
		n2 = l.insertAfter(2, n4)!; // insert after tail
		assertRefs(l, [n3, n5, n4, n2]);

		l.remove(n2);

		l.pop();

		assertRefs(l, [n3, n5]);

		expect(l.pop()).toBe(n5);
		expect(l.pop()).toBe(n3);
		expect(l.pop()).toBe(null); // no-op
		expect(l.size()).toBe(0);

		expect(l.insertBefore(11, n5)).toBe(null); // no-op

		const m2 = l.pushFront(22);
		const m3 = l.pushBack(33);
		const m1 = l.pushFront(11);

		assertRefs(l, [m1, m2, m3]);
	});

	it(`${subject} should be iterable`, () => {
		const n1 = 5;
		const n2 = 6;
		const n3 = 12;

		const expected = n1 + n2 + n3;
		let actual = 0;

		const l = init();

		l.pushFront(n1);
		l.pushFront(n2);
		l.pushFront(n3);

		let n = l.head;
		do {
			n = l.next(n!);
			actual += n?.value;
		} while (n !== l.head);

		// clear all nodes via iteration
		let next;

		for (let e = l.head; e != null; e = next) {
			next = l.next(e);
			l.remove(e);
		}

		assertRefs(l, []);

		expect(actual).toBe(expected);
	});

	it(`${subject} should be extensible`, () => {
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
		assertOrder(l3, [1, 2, 3]);
		expect(l3.size()).toBe(l1.size());

		l3.pushBackList(l2);
		assertOrder(l3, [1, 2, 3, 4, 5]);

		l4.pushFrontList(l2); // merge into an empty list
		assertOrder(l4, [4, 5]);

		l4.pushFrontList(l1);
		assertOrder(l4, [1, 2, 3, 4, 5]);

		assertOrder(l1, [1, 2, 3]);
		assertOrder(l2, [4, 5]);
	});

	it(`${subject} maintains integrity across varietied removals`, () => {
		const l = init();

		const n1 = l.pushBack(1);
		const n2 = l.pushBack(2);

		assertRefs(l, [n1, n2]);

		const n = l.head;

		l.remove(n!);
		assertRefs(l, [n2]);

		l.remove(n!);
		assertRefs(l, [n2]);
	});

	it(`${subject} should not be modified when invoking operations upon non-member nodes`, () => {
		const l1 = init();
		const l2 = init();

		l1.pushBack(1);
		l1.pushBack(2);

		l2.pushBack(3);
		l2.pushBack(4);

		const n = l1.head;
		l2.remove(n!); // l2 should not change because n is not a node of l2

		const s1 = l2.size();
		if (s1 != 2) {
			throw Error(`Have ${s1}, want 2`);
		}

		l1.insertBefore(8, n!);

		const s2 = l1.size();
		if (s2 != 3) {
			throw Error(`Have ${s2}, want 3`);
		}
	});

	it(`${subject} should maintain integrity across varietied moves`, () => {
		const l = init();

		let n1 = l.pushBack(1);
		let n2 = l.pushBack(2);
		let n3 = l.pushBack(3);
		let n4 = l.pushBack(4);

		l.moveAfter(n3, n3); // no-op
		assertRefs(l, [n1, n2, n3, n4]);

		l.moveBefore(n2, n2); // no-op
		assertRefs(l, [n1, n2, n3, n4]);

		l.moveAfter(n3, n2); // no-op
		assertRefs(l, [n1, n2, n3, n4]);

		l.moveBefore(n2, n3); // no-op
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

	it(`${subject} should accommodate static initialization`, () => {
		const sl = CircularSinglyLinkedList.create();

		expect(() => {
			sl.pushFront(9);
		}).not.toThrow();
	});

	it(`${subject} is not modified when invoking 'insertBefore' with a mark that is not a node thereof`, () => {
		const l = init();

		l.pushBack(1);
		l.pushBack(2);
		l.pushBack(3);
		l.insertBefore(1, new CircularSinglyLinkedListNode(9));
		assertOrder(l, [1, 2, 3]);
	});

	it(`${subject} is not modified when invoking 'insertAfter' with a mark that is not a node thereof`, () => {
		const l = init();

		l.pushBack(1);
		l.pushBack(2);
		l.pushBack(3);
		l.insertAfter(1, new CircularSinglyLinkedListNode(9));
		assertOrder(l, [1, 2, 3]);
	});

	it(`${subject} is not modified when invoking 'moveAfter', 'moveBefore' with a mark that is not a node thereof`, () => {
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

	it(`${subject} is not modified when operations are invoked on an empty list`, () => {
		const l = init();

		// @ts-expect-error
		l.pushBack();
		// @ts-expect-error
		l.pushFront();
		// @ts-expect-error
		l.moveAfter();
		// @ts-expect-error
		l.moveBefore();
		// @ts-expect-error
		l.insertAfter();
		// @ts-expect-error
		l.insertBefore();
		// @ts-expect-error
		l.next();
		// @ts-expect-error
		l.prev();
		// @ts-expect-error
		l.pushFrontList();
		// @ts-expect-error
		l.pushBackList();
		l.removeHead();
		// @ts-expect-error
		l.remove();
		l.pop();
	});

	it(`${subject} maintains integrity when operating upon a single-node list`, () => {
		const l = init();

		const n = l.pushFront(1);

		expect(l.next(n)).toBe(n);
		expect(l.prev(n)).toBe(n);
		assertRefs(l, [n]);

		const l2 = init();
		const n2 = l2.pushFront(11);
		assertRefs(l2, [n2]);

		l.pushFrontList(l2);
		assertOrder(l, [11, 1]);

		l.pushBackList(l2);
		assertOrder(l, [11, 1, 11]);

		const l3 = init();

		const n3 = l3.pushFront(1);

		expect(l3.next(n3)).toBe(n3);
		expect(l3.prev(n3)).toBe(n3);
		assertRefs(l3, [n3]);

		l3.pushBackList(l2);
		assertOrder(l3, [11, 1, 11]);

		l3.pushFrontList(l2);
		assertOrder(l3, [11, 1]);
	});

	it(`${subject} throws an error if provided a list of a different type`, () => {
		const l = init();
		const l2 = new CircularDoublyLinkedList<any>();
		// @ts-expect-error
		expect(() => l.pushBackList(l2)).toThrow();
		// @ts-expect-error
		expect(() => l.pushFrontList(l2)).toThrow();
	});
});

/* Helpers */

function assertOrder(list: CircularSinglyLinkedList<any>, values: number[]) {
	if (!checkListSize(list, values.length)) {
		return;
	}

	let i = 0;

	let n = list.head;

	do {
		const val = n?.value;

		if (val != values[i]) {
			throw Error(`Have ${val}, want ${values[i]}`);
		}

		n = list.next(n!);

		i++;
	} while (n !== list.head);
}

function assertRefs(
	list: CircularSinglyLinkedList<any>,
	nodes: CircularSinglyLinkedListNode<any>[]
) {
	if (!checkListSize(list, nodes.length)) {
		throw Error(`len) Have ${list.size()}, want ${nodes.length}`);
	}

	for (const [idx, node] of nodes.entries()) {
		let prev = null;
		let next = null;

		if (idx > 0) {
			prev = nodes[idx - 1];

			if (node != prev.next) {
				throw Error(`a) Have ${node}, want ${prev.next}`);
			}

			if (list.prev(node) != prev) {
				throw Error(`b) Have ${list.prev(node)}, want ${prev}`);
			}
		}

		if (idx < nodes.length - 1) {
			next = nodes[idx + 1];

			if (node.next != next) {
				throw Error(`c) Have ${node.next}, want ${next}`);
			}

			if (list.next(node) != next) {
				throw Error(`d) Have ${list.next(node)}, want ${next}`);
			}
		}
	}
}
