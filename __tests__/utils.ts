interface IList {
	size: () => number;
}

export function checkListSize(list: IList, expectedSize: number) {
	const actualSize = list.size();

	return expectedSize == actualSize;
}
