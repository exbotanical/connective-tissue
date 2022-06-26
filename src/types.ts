import { CircularDoublyLinkedList } from './list';

export interface Node<D> {
	next: Node<D> | InitializedSentinel<D> | null;
	value: D;
}

export interface CircularDoublyLinkedListNode<D> extends Node<D> {
	prev: Node<D> | InitializedSentinel<D> | null;
	list: CircularDoublyLinkedList<D>;
}

export interface ForwardNode<D> {
	next: ForwardNode<D> | null;
	value: D | null;
}

export interface Sentinel {
	next: Sentinel | null;
	prev: Sentinel | null;
}

export interface InitializedSentinel<D> {
	next: Node<D> | InitializedSentinel<D>;
	prev: Node<D> | InitializedSentinel<D>;
}
