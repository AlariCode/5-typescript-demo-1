interface IUser {
	name: string;
	age: number;
}

type KeysOfUser = keyof IUser;

const key: KeysOfUser = 'age';

function getValue<T, K extends keyof T>(obj: T, key: K) {
	return obj[key];
}

const user: IUser = {
	name: 'Вася',
	age: 30
};

const userName = getValue(user, 'name');