/**
 * @module Atomics
 */

export {
	Node,
	ForwardNode,
	Sentinel
};

/**
 * Implements a bi-directional node
 *
 * `Node` implements as a member a pointer to the list to which it belongs
 * @param {any} value
 * @returns {Node}
 * @constructor
 * @memberof module:Atomics
 */
function Node (value) {
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
 * @memberof module:Atomics
 */
function ForwardNode (value) {
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
 * @memberof module:Atomics
 */
function Sentinel () {
	return {
		next: null,
		prev: null
	};
}
