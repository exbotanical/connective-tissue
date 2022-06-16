export interface Node<D, L> {
	next: Node<D, L> | InitializedSentinel<D, L> | null;
	prev: Node<D, L> | InitializedSentinel<D, L> | null;
	list: L | null;
	value: D;
}

export interface ForwardNode<D, L> {
	next: ForwardNode<D, L> | null;
	list: L | null;
	value: D | null;
}

export interface Sentinel {
	next: Sentinel | null;
	prev: Sentinel | null;
}

export interface InitializedSentinel<D, L> {
	next: Node<D, L> | InitializedSentinel<D, L>;
	prev: Node<D, L> | InitializedSentinel<D, L>;
}
