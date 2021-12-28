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

const split: <T>(data: Array<T>) => Array<T> = getSplitedHalf;
const split2: <Y>(data: Array<Y>) => Array<Y> = getSplitedHalf;

interface ILogLine<T> {
	timeStamp: Date;
	data: T
}

type LogLineType<T> = {
	timeStamp: Date;
	data: T
}

const logLine: ILogLine<{ a: number }> = {
	timeStamp: new Date(),
	data: {
		a: 1
	}
}