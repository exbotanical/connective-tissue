import { ForwardNode } from './Atomics';

import type { IForwardNode } from './types';

/**
 * Implements a circular singly (linear) linked list.
 * Note we cannot null-terminate this list, as that would violate the circular list contract.
 *
 * @public
 */
export class CircularSinglyLinkedList<T> {
	/**
	 * The head node; implemented internally as a ring.
	 * The head is initialized to null; you must insert a node to initially populate the list.
	 */
	head: IForwardNode<T, CircularSinglyLinkedList<T>> | null;

	/**
	 * The current size of the list
	 *
	 * @private
	 */
	private length;

	constructor() {
		this.head = null;

		this.length = 0;
	}

	/**
	 * Bootstrap a new head node
	 */
	private newHead(node: IForwardNode<T, CircularSinglyLinkedList<T>>) {
		this.head = node;
		node.next = this.head;
		node.list = this;

		this.length++;

		return node;
	}

	/**
	 * Find the node prior to the given target
	 */
	private findNodeBefore(target: IForwardNode<T, CircularSinglyLinkedList<T>>) {
		let tmp = this.head;

		// we iterate until the `next` pointer points at the target
		while (tmp && tmp.next != target) {
			tmp = tmp.next;
		}

		if (!tmp) {
			throw new Error(
				'The list is malformed; there are no valid cases in which a node does not point to another'
			);
		}

		return tmp;
	}

	/**
	 * Move given node *after* `at`, where `node` and `at` must be a member of the list
	 *
	 * @private
	 */
	private move(
		node: IForwardNode<T, CircularSinglyLinkedList<T>>,
		at: IForwardNode<T, CircularSinglyLinkedList<T>>
	) {
		const tmp = this.findNodeBefore(node);

		// it's a one-node list, so we return what is a head pointing to itself
		if (tmp === node) {
			return node;
		}

		// replace the node we're moving by connecting the nodes which sit astride it
		tmp.next = node.next;
		node.next = at.next;
		at.next = node;

		return node;
	}

	/**
	 * Instantiate an empty circular singly linked list
	 */
	static create() {
		return new CircularSinglyLinkedList();
	}

	/**
	 * The current size of the list.
	 * This property does not account for a quasi-uninitialized head node.
	 */
	size() {
		return this.length;
	}

	/**
	 * Returns the next list node, if extant; else, null
	 *
	 * @param node - A valid node, which must be a member of this list (return null if the given node is not a member).
	 * If this constraint is satisfied, return the next node from the given node.
	 */
	next(node: IForwardNode<T, CircularSinglyLinkedList<T>>) {
		if (!node || !node.list || node.list !== this) {
			return null;
		}

		return node.next;
	}

	/**
	 * Returns the previous list node, if extant; else, null
	 *
	 * @param node - A valid node, which must be a member of this list (return null if the given node is not a member).
	 * If this constraint is satisfied, return the previous node relative to the given node.
	 */
	prev(node: IForwardNode<T, CircularSinglyLinkedList<T>>) {
		if (!node || !node.list || node.list !== this) {
			return null;
		}

		return this.findNodeBefore(node);
	}

	/**
	 * Remove a given node from the list
	 *
	 * @param node - A node to remove from the list
	 */
	remove(node: IForwardNode<T, CircularSinglyLinkedList<T>>) {
		if (!this.head || !node) {
			return null;
		}

		if (node.list !== this) {
			return null;
		}

		let tmp1: IForwardNode<T, CircularSinglyLinkedList<T>> = this.head;
		let tmp2: IForwardNode<T, CircularSinglyLinkedList<T>>;

		// starting with the head, cycle tmp1 until it matches the node to remove
		while (tmp1 != node) {
			if (!tmp1.next) {
				throw new Error(
					'The list is malformed; there are no valid cases in which a node does not point to another'
				);
			}

			tmp2 = tmp1;
			tmp1 = tmp1.next;
		}

		// if the node to remove is the head...
		if (tmp1 === this.head) {
			// cache the head
			tmp2 = this.head;
			// starting with the head, cycle tmp2 until its `next` points at the head
			while (tmp2.next !== this.head) {
				if (!tmp2.next) {
					throw new Error(
						'The list is malformed; there are no valid cases in which a node does not point to another'
					);
				}

				tmp2 = tmp2.next;
			}

			// point our head at the old head's `next` (removing the original head)
			this.head = this.head.next;
			// repoint tmp2 at the new head
			tmp2.next = this.head;
		} else {
			// tmp2 precedes tmp1, so we point its `next` at tmp1's `next` to remove tmp1
			tmp2!.next = tmp1!.next; // we know these exist
		}

		node.list = null;

		this.length--;

		return node;
	}

	/**
	 * Excise the head of the list and return it; if the head is not extant, return null
	 */
	removeHead() {
		if (!this.head) {
			return null;
		}

		let tmp1: IForwardNode<T, CircularSinglyLinkedList<T>> = this.head;
		const tmp2 = this.head;

		// we've a single node list
		if (tmp1.next === this.head) {
			this.head = null;
		} else {
			// cycle until we've the node before head
			while (tmp1.next !== this.head) {
				if (!tmp1.next) {
					throw new Error(
						'The list is malformed; there are no valid cases in which a node does not point to another'
					);
				}

				tmp1 = tmp1.next;
			}

			this.head = this.head.next;

			tmp1.next = this.head;
		}

		this.length--;
		tmp2.list = null;

		return tmp2;
	}

	/**
	 * Remove the last node from the list
	 */
	pop() {
		if (!this.head) {
			return null;
		}

		let tmp = this.head;
		while (tmp.next !== this.head) {
			if (!tmp.next) {
				throw new Error(
					'The list is malformed; there are no valid cases in which a node does not point to another'
				);
			}

			tmp = tmp.next;
		}

		return this.remove(tmp);
	}

	/**
	 * Move a given node to its new position after `mark`.
	 * If either the given node or mark are not an element of the list, or node == mark, the list is not modified.
	 * Both the node and mark must not be null.
	 *
	 * @param node - A node in the list to move
	 * @param mark - A node in the list after which to move `node`
	 */
	moveAfter(
		node: IForwardNode<T, CircularSinglyLinkedList<T>>,
		mark: IForwardNode<T, CircularSinglyLinkedList<T>>
	) {
		if (!node || !mark) {
			return null;
		}

		if (node.list !== this || node === mark || mark.list !== this) {
			return null;
		}

		if (mark.next === node) {
			return null;
		}

		return this.move(node, mark);
	}

	/**
	 * Move a given node to its new position before `mark`.
	 * If either the given node or mark are not an element of the list, or node == mark, the list is not modified.
	 * Both the node and mark must not be null (return value will be null)
	 *
	 * @param node - A node in the list to move
	 * @param mark - A node in the list before which to move `node`
	 */
	moveBefore(
		node: IForwardNode<T, CircularSinglyLinkedList<T>>,
		mark: IForwardNode<T, CircularSinglyLinkedList<T>>
	) {
		if (!node || !mark) {
			return null;
		}

		if (node.list !== this || node === mark || mark.list !== this) {
			return null;
		}

		if (node.next === mark) {
			return null;
		}

		const tmp = this.findNodeBefore(mark);

		return this.move(node, tmp);
	}

	/**
	 * Push a new node with value `value` to the front of the list
	 *
	 * @param value - Push to the front of the list a node with the given value `value`
	 */
	pushFront(value: T) {
		const node = ForwardNode<T, CircularSinglyLinkedList<T>>(value);

		if (!this.head) {
			return this.newHead(node);
		}

		const tmp = this.findNodeBefore(this.head);

		node.next = this.head;
		this.head = node;
		tmp.next = this.head;
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
		const node = ForwardNode<T, CircularSinglyLinkedList<T>>(value);

		if (!this.head) {
			return this.newHead(node);
		}

		if (this.head && this.length == 1) {
			this.head.next = node;
		} else {
			const tmp = this.findNodeBefore(this.head);
			tmp.next = node;
		}

		node.next = this.head;
		node.list = this;

		this.length++;

		return node;
	}

	/**
	 * Insert a new node with value `value` immediately after `mark`.
	 * If `mark` is not an element of the list, the list is not modified.
	 * `mark` must not be null.
	 *
	 * @param value - The value with which to instantiate the inserted node
	 * @param mark - A node in the list before which to insert the new node
	 */
	insertAfter(value: T, mark: IForwardNode<T, CircularSinglyLinkedList<T>>) {
		// this list is circular, thus if a given node does not point to anything,
		// we can presume its not a member of this list
		if (!mark || !mark.next) {
			return null;
		}

		if (mark.list !== this) {
			return null;
		}

		const node = ForwardNode<T, CircularSinglyLinkedList<T>>(value);

		if (!this.head) {
			return this.newHead(node);
		}

		const tmp = this.findNodeBefore(mark.next);

		if (tmp.next === this.head) {
			tmp.next = node;
			node.next = this.head;
		} else {
			node.next = tmp.next;
			tmp.next = node;
		}

		node.list = this;

		this.length++;

		return node;
	}

	/**
	 * Insert a new node with value `value` immediately before `mark`.
	 * If `mark` is not an element of the list, the list is not modified.
	 * `mark` must not be null.
	 *
	 * @param value - The value with which to instantiate the inserted node
	 * @param mark - A node in the list before which to insert the new node
	 */
	insertBefore(value: T, mark?: IForwardNode<T, CircularSinglyLinkedList<T>>) {
		if (!mark) {
			return null;
		}

		if (mark.list !== this) {
			return null;
		}

		const prev = this.prev(mark);

		if (!prev) {
			return null;
		}

		return this.insertAfter(value, prev);
	}

	/**
	 * Insert a copy of another list at the back of the caller list.
	 * The lists may be equivalent, but must not be null.
	 * @throws {TypeError} Throws if provided a list that is not an instance of `CircularDoublyLinkedList`
	 */
	pushBackList(other: this) {
		if (!other || !other.head) {
			return;
		}

		if (!(other instanceof CircularSinglyLinkedList)) {
			throw new TypeError(
				'`other` must be an instance of `CircularSinglyLinkedList`'
			);
		}

		for (
			let i = other.size(),
				n: IForwardNode<T, CircularSinglyLinkedList<T>> | null = other.head;
			i > 0;
			i--, n = other.next(n)
		) {
			if (!n) {
				throw new Error(
					'`other` is malformed; there are no valid cases in which a node does not point to another'
				);
			}

			this.pushBack(n.value as T);
		}
	}

	/**
	 * Insert a copy of another list at the front of the caller list.
	 * The lists may be the same, but must not be null.
	 * @throws {TypeError} Throws if provided a list that is not an instance of `CircularDoublyLinkedList`
	 */
	pushFrontList(other: this) {
		if (!other || !other.head) {
			return;
		}

		if (!(other instanceof CircularSinglyLinkedList)) {
			throw new TypeError(
				'other must be an instance of `CircularSinglyLinkedList`'
			);
		}

		for (
			let i = other.size(), n = other.prev(other.head);
			i > 0;
			i--, n = other.prev(n)
		) {
			if (!n) {
				throw new Error(
					'`other` is malformed; there are no valid cases in which a node does not point to another'
				);
			}

			this.pushFront(n.value as T);
		}
	}
}
