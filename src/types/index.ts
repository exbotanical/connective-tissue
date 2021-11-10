export interface INode<D, L> {
	next: INode<D, L> | ISentinel | null;
	prev: INode<D, L> | ISentinel | null;
	list: L | null;
	value: D;
}

export interface IForwardNode<D, L> {
	next: IForwardNode<D, L> | null;
	list: L | null;
	value: D | null;
}

export interface ISentinel {
	next: ISentinel | null;
	prev: ISentinel | null;
}
