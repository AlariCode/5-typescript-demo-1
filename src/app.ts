interface User {
	name: string;
}

const a = {};

assertUser(a);
a.name = 'Вася';


function assertUser(obj: unknown): asserts obj is User {
	if (typeof obj === 'object' && !!obj && 'name' in obj) {
		return;
	}
	throw new Error('Не пользователь');
}

function isUser(obj: unknown): obj is User {
	if (typeof obj === 'object' && !!obj && 'name' in obj) {
		return true;
	}
	return false;
}