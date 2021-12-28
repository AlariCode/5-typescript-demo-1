function logMiddleware<T>(data: T): T {
	console.log(data);
	return data;
}

const res = logMiddleware<number>(10);

function getSplitedHalf<T>(data: Array<T>): Array<T> {
	const l = data.length / 2;
	return data.splice(0, l);
}

getSplitedHalf<number>([1, 3, 4]);