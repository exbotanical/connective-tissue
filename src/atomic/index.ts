import type {
	ForwardNode as ForwardNodeType,
	Sentinel as SentinelType,
	Node as NodeType
} from '../types';

/**
 * Implements a bi-directional node.
 * `Node` implements as a member a pointer to the list to which it belongs
 *
 * @param value - A value with which to instantiate the node
 * @public
 */
export function Node<D, L>(value: D): NodeType<D, L> {
	return {
		next: null,
		prev: null,
		list: null,
		value
	};
}

/**
 * Implements a uni-directional (forward) node.
 * `ForwardNode` implements as a member a pointer to the list to which it belongs
 *
 * @param value - A value with which to instantiate the node
 * @public
 */
export function ForwardNode<D, L>(value: D): ForwardNodeType<D, L> {
	return {
		next: null,
		list: null,
		value
	};
}

/**
 * Implements a ring data structure for terminating a bi-directional list
 * @public
 */
export class Sentinel implements SentinelType {
	constructor(public next = null, public prev = null) {}
}
