export function Node (value) {
	return {
		next: null,
		prev: null,
		list: null,
		value
	};
}

export function ForwardNode (value) {
	return {
		next: null,
		list: null,
		value
	};
}
