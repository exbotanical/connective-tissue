import { Node, Sentinel } from './Atomics';

/**
 * Implements a circular doubly linked list as a ring, such that
 * the sentinel node is both the next node of the tail, and the previous node
 * of the head
 * @class CircularDoublyLinkedList
 */
export class CircularDoublyLinkedList {
	constructor () {

		/**
		 * The sentinel terminator node
		 * @property {Sentinel}
		 */
		this.sentinel = new Sentinel();
		this.sentinel.next = this.sentinel;
		this.sentinel.prev = this.sentinel;

		/**
		 * The list length, sans the sentinel terminator
		 * @property {number}
		 */
		this.length = 0;
	}

	/**
	 * Instantiate an empty circular doubly linked list
	 * @returns {CircularDoublyLinkedList}
	 * @static
	 */
	static create () {
		return new CircularDoublyLinkedList();
	}

	/**
	 * The current size of the list, sans the sentinel node
	 * @returns {number}
	 */
	size () {
		return this.length;
	}

	/**
	 * Returns the next list node, if extant; else, null
	 * @param {Node} node
	 * @returns {(Node|null)}
	 */
	next (node) {
		const p = node.next;

		if (p && node.list != null && p != node.list.sentinel) {
			return p;
		}

		return null;
	}

	/**
	 * Returns the previous list node, if extant; else, null
	 * @param {Node} node
	 * @returns {(Node|null)}
	 */
	prev (node) {
		const p = node.prev;

		if (p && node.list != null && p != node.list.sentinel) {
			return p;
		}

		return null;
	}

	/**
	 * Returns the head node of the list or null if the list is empty
	 * @returns {(Node|null)}
	 */
	head () {
		if (!this.length) return null;

		return this.sentinel.next;
	}

	/**
	 * Returns the tail node of the list or null if the list is empty
	 * @returns {(Node|null)}
	 */
	tail () {
		if (!this.length) return null;

		return this.sentinel.prev;
	}

	/**
	 * Insert a new node after a given node `at`
	 * @param {Node} node
	 * @param {Node} at
	 * @returns {Node}
	 */
	insert (node, at) {
		node.prev = at;
		node.next = at.next;
		node.prev.next = node;
		node.next.prev = node;

		node.list = this;
		this.length++;

		return node;
	}

	/**
	 * Remove a given node from the list
	 * @param {Node} node
	 * @returns {Node} The removed node
	 */
	remove (node) {
		if (node.list === this) {
			node.prev.next = node.next;
			node.next.prev = node.prev;
			node.next = null;
			node.prev = null;
			node.list = null;
			this.length--;
		}

		return node;
	}

	/**
	 * Remove the last node from the list
	 * @param {Node} node
	 * @returns {Node} The removed node
	 */
	pop () {
		return this.remove(this.tail());
	}

	/**
	 * Move given node to `at`
	 * @param {Node} node
	 * @param {Node} at
	 * @returns {Node}
	 */
	move (node, at) {
		if (node === at) return node;

		node.prev.next = node.next;
		node.next.prev = node.prev;

		node.prev = at;
		node.next = at.next;
		node.prev.next = node;
		node.next.prev = node;

		return node;
	}

	/**
	 * Push a new node with value `value` to the front of the list
	 * @param {any} value
	 * @returns {Node}
	 */
	pushFront (value) {
		if (!this.sentinel.next) {
			Object.assign(this, new CircularDoublyLinkedList());
		}

		return this.insertValue(value, this.sentinel);
	}

	/**
	 * Push a new node with value `value` to the back of the list
	 * @param {any} value
	 * @returns {Node}
	 */
	pushBack (value) {
		if (!this.sentinel.next) {
			Object.assign(this, new CircularDoublyLinkedList());
		}

		return this.insertValue(value, this.sentinel.prev);
	}

	/**
	 * Insert a new node with value `value` immediately before `mark`
	 *
	 * If `mark` is not an element of the list, the list is not modified
	 *
	 * `mark` must not be null
	 * @param {any} value
	 * @param {Node} mark
	 * @returns {Node}
	 */
	insertBefore (value, mark) {
		if (mark.list !== this) return null;

		return this.insertValue(value, mark.prev);
	}

	/**
	 * Insert a new node with value `value` immediately after `mark`
	 *
	 * If `mark` is not an element of the list, the list is not modified
	 *
	 * `mark` must not be null
	 * @param {any} value
	 * @param {Node} mark
	 * @returns {Node}
	 */
	insertAfter (value, mark) {
		if (mark.list !== this) return null;

		return this.insertValue(value, mark);
	}

	/**
	 * Move a node to the front of the list
	 *
	 * If the given node is not an element of the list, the list is not modified
	 *
	 * The given node must not be null
	 * @param {Node} node
	 * @returns {Node}
	 */
	moveToFront (node) {
		if (node.list !== this || this.sentinel.next === node) {
			return;
		}

		this.move(node, this.sentinel);
	}

	/**
	 * Move a node to the back of the list
	 *
	 * If the given node is not an element of the list, the list is not modified
	 *
	 * The given node must not be null
	 * @param {Node} node
	 * @returns {Node}
	 */
	moveToBack (node) {
		if (node.list !== this || this.sentinel.prev === node) {
			return;
		}

		this.move(node, this.sentinel.prev);
	}

	/**
	 * Move a given node to its new position before `mark`
	 *
	 * If either the given node or mark are not an element of the list, or node == mark, the list is not modified
	 *
	 * Both the node and mark must not be null
	 * @param {Node} node
	 * @param {Node} mark
	 * @returns {Node}
	 */
	moveBefore (node, mark) {
		if (node.list !== this || node === mark || mark.list !== this) {
			return;
		}

		this.move(node, mark.prev);
	}

	/**
	 * Move a given node to its new position after `mark`
	 *
	 * If either the given node or mark are not an element of the list, or node == mark, the list is not modified
	 *
	 * Both the node and mark must not be null
	 * @param {Node} node
	 * @param {Node} mark
	 * @returns {Node}
	 */
	moveAfter (node, mark) {
		if (node.list !== this || node === mark || mark.list !== this) {
			return;
		}

		this.move(node, mark);
	}

	/**
	 * Convenience for inserting a given value into a new node after a given node `at`
	 * @param {any} value
	 * @param {Node} at
	 * @returns {Node}
	 */
	insertValue (value, at) {
		return this.insert(new Node(value), at);
	}

	/**
	 * Insert a copy of another list at the back of the caller list
	 *
	 * The lists may be the same, but must not be null
	 * @param {CircularDoublyLinkedList} other
	 */
	pushBackList (other) {
		if (!this.sentinel.next) {
			Object.assign(this, new CircularDoublyLinkedList());
		}

		for (let i = other.size(), n = other.head(); i > 0; i--, n = other.next(n)) {
			this.insertValue(n.value, this.sentinel.prev);
		}
	}

	/**
	 * Insert a copy of another list at the front of the caller list
	 *
	 * The lists may be the same, but must not be null
	 * @param {CircularDoublyLinkedList} other
	 */
	pushFrontList (other) {
		if (!this.sentinel.next) {
			Object.assign(this, new CircularDoublyLinkedList());
		}

		for (let i = other.size(), n = other.tail(); i > 0; i--, n = other.prev(n)) {
			this.insertValue(n.value, this.sentinel);
		}
	}
}
