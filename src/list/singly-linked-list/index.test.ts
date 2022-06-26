import { stringify } from 'flatted';
import { SinglyLinkedList } from '../..';

import type { SinglyLinkedListNode } from '..';

type MaybeNode = SinglyLinkedListNode<any> | null;
interface List {
	size: () => number;
}

function checkListSize(list: List, expectedSize: number) {
	const actualSize = list.size();

	return expectedSize == actualSize;
}

const subject = 'The singly linked list';
const init = () => new SinglyLinkedList<any>();

describe('SinglyLinkedList', () => {
	it(`${subject} should shift nodes when inserting a new head node`, () => {
		const l = init();

		expect(l.head).toBe(null);
		expect(l.size()).toBe(0);

		const n = l.pushFront(9);
		expect(l.head).toBe(n);
		expect(l.head?.next).toBe(null);
		expect(l.size()).toBe(1);

		const n1 = l.pushFront(9);
		expect(l.head).toBe(n1);
		expect(l.head?.next).toBe(n);
		expect(l.size()).toBe(2);

		assertOrder(l, [n1, n]);
	});

	it(`${subject} should shift nodes when inserting a new tail node`, () => {
		const l = init();

		const n = l.pushBack(9);
		expect(l.head).toBe(n);
		expect(l.head?.next).toBe(null);
		expect(l.size()).toBe(1);

		const l2 = init();

		const n1 = l.pushFront(1);
		const n2 = l.pushFront(2);
		const n4 = l.pushBack(4);
		const n3 = l.pushFront(3);

		assertOrder(l2, [n3, n2, n1, n4]);
	});

	it(`${subject} should maintain integrity across arbitrary inserts`, () => {
		const l = init();

		const n1 = l.pushFront(1);
		const n2 = l.pushFront(2);
		const n4 = l.pushBack(4);
		const n5 = l.pushBack(5);
		const n3 = l.pushFront(3);

		assertOrder(l, [n3, n2, n1, n4, n5]);

		const n6 = l.insertAfter(6, n3);
		assertOrder(l, [n3, n6, n2, n1, n4, n5]);
		assertRefs(l, [n3, n6, n2, n1, n4, n5]);

		const n7 = l.insertAfter(7, n3);
		const n8 = l.insertAfter(8, n2);
		const n9 = l.insertAfter(9, n5);
		assertRefs(l, [n3, n7, n6, n2, n8, n1, n4, n5, n9]);
	});

	it(`${subject} should maintain integrity across arbitrary removals`, () => {
		const l = init();

		const n1 = l.pushFront(1);
		const n2 = l.pushFront(2);
		const n4 = l.pushBack(4);
		const n5 = l.pushBack(5);
		const n3 = l.pushFront(3);

		const ns = [n3, n2, n1, n4, n5];
		for (let i = 0; i < l.size(); i++) {
			expect(l.removeHead()).toBe(ns.shift());
			assertOrder(l, ns);
			assertRefs(l, ns);
		}

		const l2 = init();

		const m1 = l2.pushFront(1);
		const m2 = l2.pushFront(2);
		const m4 = l2.pushBack(4);
		const m5 = l2.pushBack(5);
		const m3 = l2.pushFront(3);

		const ms = [m3, m2, m1, m4, m5];

		for (let j = 0; j < l2.size() - 1; j++) {
			expect(l2.pop()).toBe(ms.pop());
			assertOrder(l2, ms);
			assertRefs(l2, ms);
		}

		const l3 = init();

		const k1 = l3.pushFront(1);
		const k2 = l3.pushFront(2);
		const k4 = l3.pushBack(4);
		const k5 = l3.pushBack(5);
		const k3 = l3.pushFront(3);

		l3.remove(k1);
		assertOrder(l3, [k3, k2, k4, k5]);
		assertRefs(l3, [k3, k2, k4, k5]);

		l3.remove(k5);
		assertOrder(l3, [k3, k2, k4]);
		assertRefs(l3, [k3, k2, k4]);

		l3.remove(k2);
		assertOrder(l3, [k3, k4]);
		assertRefs(l3, [k3, k4]);

		l3.remove(k3);
		assertRefs(l3, [k4]);
		expect(l3.size()).toBe(1);

		l3.remove(k4);
		assertRefs(l3, []);
		expect(l3.size()).toBe(0);
	});
});

/* Helpers */

function assertOrder(list: SinglyLinkedList<any>, values: MaybeNode[]) {
	if (!checkListSize(list, values.length)) {
		return;
	}

	let i = 0;

	let n = list.head;

	do {
		const val = n;

		if (val != values[i]) {
			throw Error(`Have ${val}, want ${stringify(values[i])}`);
		}

		n = list.next(n);

		i++;
	} while (list.next());
}

function assertRefs(list: SinglyLinkedList<any>, nodes: MaybeNode[]) {
	if (!checkListSize(list, nodes.length))
		throw Error(`len) Have ${list.size()}, want ${nodes.length}`);

	for (const [idx, node] of nodes.entries()) {
		let next = null;

		if (idx < nodes.length - 1) {
			next = nodes[idx + 1];

			if (node?.next != next) {
				throw Error(`a) Have ${node?.next}, want ${stringify(next)}`);
			}

			if (list.next(node) != next) {
				throw Error(`b) Have ${list.next(node)}, want ${stringify(next)}`);
			}
		} else if (idx == nodes.length) {
			if (node?.next != null) {
				throw Error(`c) Have ${stringify(node?.next)}, want null`);
			}
		}
	}
}
