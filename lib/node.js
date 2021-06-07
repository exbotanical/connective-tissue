export {
	Node
};

function Node (value) {
	return {
		next: null,
		prev: null,
		list: null,
		value
	};
}
