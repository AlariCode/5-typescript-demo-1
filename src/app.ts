type A = Awaited<Promise<string>>;
type A2 = Awaited<Promise<Promise<string>>>;

interface IMenu {
	name: string;
	url: string;
}

async function getMenu(): Promise<IMenu[]> {
	return [{ name: 'Аналитика', url: 'analytics' }];
}

type R = Awaited<ReturnType<typeof getMenu>>;

async function getArray<T>(x: T): Promise<Awaited<T>[]> {
	return [await x];
}

async function getArray2<T>(x: T): Promise<T[]> {
	return [await x];
}