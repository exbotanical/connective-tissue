import test from 'tape';

import { CircularDoublyLinkedList } from '../lib';


const list = new CircularDoublyLinkedList();

list.Next();

// const subject = 'the open doubly linked list';
// const init = () => new CircularLinkedList();

// test(`${subject} tracks its length`, t => {
// 	const expected = 4;

// 	const ll = init();

// 	ll.push(9);
// 	ll.push(9);
// 	ll.push(9)
// 	ll.pop();
// 	ll.pop();
// 	ll.push(9);
// 	ll.push(9);
// 	ll.push(9);
// 	ll.pop();
// 	ll.push(9);

// 	t.equals(ll.size(), expected);
// 	t.end();
// });

// test(`${subject} appends new nodes to the head of the list`, t => {
// 	const ll = init();
// 	const expected = ll.push(9);

// 	t.equals(ll.head, expected);
// 	t.end();
// });

// test(`${subject} removes a given node`, t => {
// 	const ll = init();
// 	ll.push(9);
// 	const target = ll.push(12);
// 	ll.push(6);

// 	ll.remove(target);

// 	t.equals(ll.size(), 2);
// 	t.equals(ll.head.data, 6);
// 	t.equals(ll.tail.data, 9);
// 	t.end();
// });

// test(`${subject} should attain initial state when removing its sole node`, t => {
// 	const ll = init();
// 	const target = ll.push(9);

// 	ll.remove(target);

// 	ll.pop();

// 	t.equals(ll.size(), 0);
// 	t.equals(ll.head, null);
// 	t.equals(ll.tail, null);
// 	t.end();
// });

// test(`${subject} performs a noop when 'pop' is invoked on an empty list`, t => {
// 	const ll = init();

// 	t.doesNotThrow(() => ll.pop());
// 	t.end();
// });

// test(`${subject} performs a noop when 'remove' is invoked on an empty list`, t => {
// 	const ll = init();

// 	t.doesNotThrow(() => ll.remove());
// 	t.end();
// });

// test(`${subject} maintains integrity when 'pop' is invoked on a single-node list`, t => {
// 	const ll = init();

// 	ll.push(9);
// 	t.doesNotThrow(() => ll.pop());
// 	t.end();
// });

// test(`${subject} returns the old tail when 'pop' is invoked`, t => {
// 	const ll = init();

// 	const expected = ll.push(9);
// 	t.equals(ll.pop(), expected);
// 	t.end();
// });

// test(`${subject} properly shifts its member nodes`, t => {
// 	const ll = init();
// 	const staticSize = 9;

// 	for (let i = 1; i <= staticSize; i++) {

// 		const instance = ll.push(i);
// 		if (i === 5) ll.remove(instance);
// 	}

// 	ll.pop();

// 	t.equals(ll.size(), staticSize - 2);
// 	t.end();
// });
