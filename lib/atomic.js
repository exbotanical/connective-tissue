/**
 * Implements a bi-directional node
 *
 * `Node` implements as a member a pointer to the list to which it belongs
 * @param {any} value
 * @returns {Node}
 * @constructor
 */
export function Node (value) {
	return {
		next: null,
		prev: null,
		list: null,
		value
	};
}

/**
 * Implements a uni-directional (forward) node
 *
 * `ForwardNode` implements as a member a pointer to the list to which it belongs
 * @param {any} value
 * @returns {ForwardNode}
 * @constructor
 */
export function ForwardNode (value) {
	return {
		next: null,
		list: null,
		value
	};
}

/**
 * Implements a ring data structure for terminating a bi-directional list
 *
 * @returns {Sentinel}
 * @constructor
 */
export function Sentinel () {
	return {
		next: null,
		prev: null
	};
}
