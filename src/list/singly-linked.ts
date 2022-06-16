import { ForwardNode } from '..';

import type { ForwardNode as ForwardNodeType } from '../types';

/**
 * Implements a singly linked list.
 * Optionally pass a type to define the shape of node data i.e. node member `value`.
 *
 * @public
 */
export class SinglyLinkedList<T> {
	/**
	 * The head node.
	 * The head is initialized to null; you mustSSS insert a node to initially populate the list.
	 */
	head: ForwardNodeType<T, SinglyLinkedList<T>> | null;

	/**
	 * The current size of the list
	 *
	 * @internal
	 */
	private length;

	constructor() {
		this.head = null;

		this.length = 0;
	}

	/**
	 * Instantiate an 'uninitialized' singly linked list
	 */
	static create() {
		return new SinglyLinkedList();
	}

	/**
	 * The current size of the list.
	 * This property does not account for a quasi-uninitialized head node.
	 */
	size() {
		return this.length;
	}

	/**
	 * Returns the next node from that given, if extant; else, null
	 *
	 * @param node - A valid node, which must be a member of this list (return null if the given node is not a member).
	 * If this constraint is satisfied, return the next node from the given node.
	 */
	next(node?: ForwardNodeType<T, SinglyLinkedList<T>> | null) {
		if (!node || !node.list || node.list !== this) {
			return null;
		}

		return node.next;
	}

	/**
	 * Push a new node with value `value` to the front of the list
	 *
	 * @param value - Push to the front of the list a node with the given value `value`
	 */
	pushFront(value: T) {
		const node = ForwardNode<T, SinglyLinkedList<T>>(value);

		if (!this.head) {
			node.next = null;
		} else {
			node.next = this.head;
		}

		this.head = node;
		node.list = this;

		this.length++;

		return node;
	}

	/**
	 * Push a new node with value `value` to the back of the list
	 *
	 * @param value - Push to the back of the list a node with the given value `value`
	 */
	pushBack(value: T) {
		const node = ForwardNode<T, SinglyLinkedList<T>>(value);

		if (!this.head) {
			this.head = node;
		} else {
			let tmp = this.head;
			while (tmp.next !== null) {
				tmp = tmp.next;
			}

			tmp.next = node;
		}

		node.list = this;

		this.length++;

		return node;
	}

	/**
	 * Insert a new node with value `value` immediately after `mark`.
	 * If `mark` is not an element of the list, the list is not modified.
	 * `mark` must not be null.
	 *
	 * @param value - A value to store in the inserted node
	 * @param mark - The node after which the newly created node will be inserted
	 */
	insertAfter(value: T, mark: ForwardNodeType<T, SinglyLinkedList<T>>) {
		if (!mark) {
			return null;
		}

		if (mark.list !== this) {
			return null;
		}

		const node = ForwardNode<T, SinglyLinkedList<T>>(value);

		if (!this.head) {
			node.next = null;
			this.head = node;
		} else {
			let tmp: ForwardNodeType<T, SinglyLinkedList<T>> | null = this.head;
			while (tmp?.next !== mark.next) {
				// because we maintain a list ref in each node, *not* finding the mark should never happen...
				// but we observe the check nonetheless in the case of a weird edge case
				if (!tmp) {
					return null;
				}

				tmp = tmp.next;
			}

			node.next = tmp.next;
			tmp.next = node;
		}

		node.list = this;

		this.length++;

		return node;
	}

	/**
	 * Excise the head of the list and return it; if the head is not extant, return null
	 */
	removeHead() {
		if (!this.head) {
			return null;
		}

		const tmp = this.head;

		if (!tmp.next) {
			this.head = null;
		} else {
			this.head = tmp.next;
		}

		tmp.list = null;

		this.length--;

		return tmp;
	}

	/**
	 * Remove the last node from the list
	 */
	pop() {
		if (!this.head) {
			return null;
		}

		let tmp1 = this.head;
		let tmp2: ForwardNodeType<T, SinglyLinkedList<T>>;

		if (!tmp1.next) {
			this.head = null;
		} else {
			while (tmp1.next != null) {
				tmp2 = tmp1;
				tmp1 = tmp1.next;
			}

			// the above while loop will have been executed at least once
			// given the preceding control flow
			tmp2!.next = null;
		}

		tmp1.list = null;

		this.length--;

		return tmp1;
	}

	/**
	 * Remove a given node from the list
	 *
	 * @param node - A node to remove from the list
	 */
	remove(node: ForwardNodeType<T, SinglyLinkedList<T>>) {
		if (!this.head || !node || node.list !== this || !this.length) {
			return null;
		}

		let tmp = this.head;

		// we can blindly point the head at its next;
		// if there's a single node, it'll be null, which is what we'd want
		if (tmp === node) {
			this.head = this.head.next;
		} else {
			let prev = null;

			while (tmp != node) {
				prev = tmp;
				tmp = tmp.next as ForwardNodeType<T, SinglyLinkedList<T>>;
			}

			prev!.next = tmp.next;
		}

		tmp.list = null;

		this.length--;

		return tmp;
	}
}
