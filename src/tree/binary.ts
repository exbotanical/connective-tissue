class Node<T> {
	constructor(
		public data: T,
		public left: Node<T> | null,
		public right: Node<T> | null
	) {}
}

class BinarySearchTree<T> {
	constructor(private root: Node<T> | null) {}
}
