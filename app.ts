interface User {
	login: string;
	password?: string;
}

const user: User = {
	login: 'a@a.ru',
	password: '1'
}

function multiply(first: number, second?: number): number {
	if (!second) {
		return first * first;
	}
	return first * second;
}

multiply(5)