import { ForwardNode } from './Atomics';

/**
 * Implements a singly linked list
 * @class SinglyLinkedList
 */
export class SinglyLinkedList {
	constructor () {

		/**
		 * The head node
		 * @property {ForwardNode}
		 */
		this.head = null;

		/**
		 * The current size of the list
		 * @property {number}
		 */
		this.length = 0;
	}

	/**
	 * Instantiate an empty singly linked list
	 * @returns {SinglyLinkedList}
	 * @static
	 */
	static create () {
		return new SinglyLinkedList();
	}

	/**
	 * The current size of the list
	 * @returns {number}
	 */
	size () {
		return this.length;
	}

	/**
	 * Returns the next list node, if extant; else, null
	 * @param {ForwardNode} node
	 * @returns {(Node|null)}
	 */
	next (node) {
		if (!node || !node.list || node.list !== this) return null;

		return node.next;
	}

	/**
	 * Push a new node with value `value` to the front of the list
	 * @param {any} value
	 * @returns {ForwardNode}
	 */
	pushFront (value) {
		const node = new ForwardNode(value);

		if (!this.head) node.next = null;
		else node.next = this.head;

		this.head = node;

		node.list = this;
		this.length++;
		return node;
	}

	/**
 * Push a new node with value `value` to the back of the list
 * @param {any} value
 * @returns {ForwardNode}
 */
	pushBack (value) {
		const node = new ForwardNode(value);

		if (!this.head) this.head = node;
		else {
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
 * Insert a new node with value `value` immediately after `mark`
 *
 * If `mark` is not an element of the list, the list is not modified
 *
 * `mark` must not be null
 * @param {any} value
 * @param {ForwardNode} mark
 * @returns {(ForwardNode|null)}
 */
	insertAfter (value, mark) {
		if (!mark) return null;

		if (mark.list !== this) return null;

		const node = new ForwardNode(value);

		if (!this.head) {
			node.next = null;
			this.head = node;
		} else {
			let tmp = this.head;
			while (tmp.next !== mark.next) {
				// because we maintain a list ref in ea node, not finding the mark
				// should never happen...
				// but we observe the check nonetheless in the case of a weird edge case
				if (!tmp) return null;
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
	 * @returns {(ForwardNode|null)}
	 */
	removeHead () {
		if (!this.head) return null;

		let tmp = this.head;

		if (!tmp.next) this.head = null;
		else this.head = tmp.next;

		this.length--;
		tmp.list = null;
		return tmp;
	}

	/**
	 * Remove the last node from the list
	 * @param {ForwardNode} node
	 * @returns {(Node|null)} The removed node
	 */
	pop () {
		if (!this.head) return null;

		let tmp1 = this.head;
		let tmp2;

		if (!tmp1.next) this.head = null;
		else {
			while (tmp1.next != null) {
				tmp2 = tmp1;
				tmp1 = tmp1.next;
			}
			tmp2.next = null;
		}

		this.length--;
		tmp1.list = null;
		return tmp1;
	}

	/**
	 * Remove a given node from the list
	 * @param {ForwardNode} node
	 * @returns {(Node|null)} The removed node
	 */
	remove (node) {
		if (!this.head || !node || node.list !== this || !this.length) return null;

		let tmp = this.head;

		// we can blindly point the head at its next;
		// if there's a single node, it'll be null, which is what we'd want
		if (tmp === node) this.head = this.head.next;
		else {
			let prev = null;

			while (tmp != node) {
				prev = tmp;
				tmp = tmp.next;
			}

			prev.next = tmp.next;
		}

		tmp.list = null;
		this.length--;
		return tmp;
	}

}
