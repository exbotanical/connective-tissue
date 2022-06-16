interface List {
	size: () => number;
}

export function checkListSize(list: List, expectedSize: number) {
	const actualSize = list.size();

	return expectedSize == actualSize;
}
