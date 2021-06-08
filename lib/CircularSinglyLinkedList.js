import { ForwardNode } from './Node';

export class CircularSinglyLinkedList {
	constructor () {
		this.head = null;
		this.length = 0;
	}

	#newHead (node) {
		this.head = node;
		node.next = this.head;
		node.list = this;
		this.length++;
		return node;
	}

	#findNodeBefore (target) {
		let tmp = this.head;
		while (tmp.next != target) {
			tmp = tmp.next;
		}

		return tmp;
	}

	/**
	 * Move given node after `at`, where `node` and `at` must be a member of the list
	 * @param {Node} node
	 * @param {Node} at
	 * @returns {Node}
	 * @private
	 */
	#move (node, at) {
		const tmp = this.#findNodeBefore(node);

		tmp.next = node.next;
		node.next = at.next;
		at.next = node;

		return node;
	}

	static create () {
		return new CircularSinglyLinkedList();
	}

	size () {
		return this.length;
	}

	/**
	 * Returns the next list node, if extant; else, null
	 * @param {Node} node
	 * @returns {(Node|null)}
	 */
	next (node) {
		if (!node || node.list && node.list !== this) return null;

		const p = node.next;

		if (p && node.list == this) return p;
		return null;
	}

	/**
	 * Returns the previous list node, if extant; else, null
	 * @param {Node} node
	 * @returns {(Node|null)}
	 */
	prev (node) {
		if (!node || node.list && node.list !== this) return null;

		const p = this.#findNodeBefore(node);
		return p ? p : null;
	}

	/**
	 * Remove a given node from the list
	 * @param {Node} node
	 * @returns {(Node|null)} The removed node
	 */
	remove (node) {
		if (!this.head || !node) return null;

		if (node.list !== this) return null;

		let tmp1 = this.head;
		let tmp2;

		while (tmp1 != node) {
			tmp2 = tmp1;
			tmp1 = tmp1.next;
		}

		if (tmp1 === this.head) {
			tmp2 = this.head;

			while (tmp2.next !== this.head) tmp2 = tmp2.next;

			this.head = this.head.next;
			tmp2.next = this.head;
		} else {
			tmp2.next = tmp1.next;
		}

		node.list = null;
		this.length--;
		return node;
	}

	removeHead () {
		if (!this.head) return null;

		let tmp1 = this.head;
		let tmp2 = this.head;
		if (tmp1.next === this.head) this.head = null;
		else {
			while (tmp1.next !== this.head) {
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
	 * @param {Node} node
	 * @returns {(Node|null)} The removed node
	 */
	pop () {
		if (!this.head) return null;

		let tmp = this.head;
		while (tmp.next !== this.head) tmp = tmp.next;

		return this.remove(tmp);
	}

	/**
	 * Move a given node to its new position after `mark`
	 *
	 * If either the given node or mark are not an element of the list; node == mark; or mark.next == node, the list is not modified
	 *
	 * Both the node and mark must not be null
	 * @param {Node} node
	 * @param {Node} mark
	 * @returns {Node}
	 */
	moveAfter (node, mark) {
		if (!node || !mark) return;

		if (node.list !== this || node === mark || mark.list !== this) {
			return;
		}

		if (mark.next === node) return;

		this.#move(node, mark);
	}

	/**
	 * Move a given node to its new position before `mark`
	 *
	 * If either the given node or mark are not an element of the list; node == mark; or node.next == mark, the list is not modified
	 *
	 * Both the node and mark must not be null
	 * @param {Node} node
	 * @param {Node} mark
	 * @returns {Node}
	 */
	moveBefore (node, mark) {
		if (!node || !mark) return;

		if (node.list !== this || node === mark || mark.list !== this) {
			return;
		}

		if (node.next === mark) return;

		const tmp = this.#findNodeBefore(mark);

		this.#move(node, tmp);
	}

	/**
	 * Push a new node with value `value` to the front of the list
	 * @param {any} value
	 * @returns {Node}
	 */
	pushFront (value) {
		const node = new ForwardNode(value);

		if (!this.head) return this.#newHead(node);

		const tmp = this.#findNodeBefore(this.head);

		node.next = this.head;
		this.head = node;
		tmp.next = this.head;
		node.list = this;
		this.length++;
		return node;
	}

	/**
	 * Push a new node with value `value` to the back of the list
	 * @param {any} value
	 * @returns {Node}
	 */
	pushBack (value) {
		const node = new ForwardNode(value);

		if (!this.head) return this.#newHead(node);

		if (this.head && this.length == 1) {
			this.head.next = node;
		} else {
			const tmp = this.#findNodeBefore(this.head);
			tmp.next = node;
		}

		node.next = this.head;
		node.list = this;
		this.length++;
		return node;
	}

	/**
	 * Insert a new node with value `value` immediately after `mark`
	 *
	 * If `mark` is not an element of the list, the list is not modified
	 *
	 * `mark` must not be null
	 * @param {any} value
	 * @param {Node} mark
	 * @returns {(Node|null)}
	 */
	insertAfter (value, mark) {
		if (!mark) return null;

		if (mark.list !== this) return null;

		const node = new ForwardNode(value);

		if (!this.head) return this.#newHead(node);

		const tmp = this.#findNodeBefore(mark.next);

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
	 * Insert a new node with value `value` immediately before `mark`
	 *
	 * If `mark` is not an element of the list, the list is not modified
	 *
	 * `mark` must not be null
	 * @param {any} value
	 * @param {Node} mark
	 * @returns {(Node|null)}
	 */
	insertBefore (value, mark) {
		if (!mark) return null;

		if (mark.list !== this) return null;

		return this.insertAfter(value, this.prev(mark));
	}

	/**
	 * Insert a copy of another list at the back of the caller list
	 *
	 * The lists may be the same, but must not be null
	 * @param {CircularSinglyLinkedList} other
	 */
	pushBackList (other) {
		if (!other) return;

		for (let i = other.size(), n = other.head; i > 0; i--, n = other.next(n)) {
			this.pushBack(n.value);
		}
	}

	/**
	 * Insert a copy of another list at the front of the caller list
	 *
	 * The lists may be the same, but must not be null
	 * @param {CircularSinglyLinkedList} other
	 */
	pushFrontList (other) {
		if (!other) return;

		for (let i = other.size(), n = other.prev(other.head); i > 0; i--, n = other.prev(n)) {
			this.pushFront(n.value);
		}
	}
}
