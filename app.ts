let a = 5;
let b: string = a.toString()
let e: string = new String(a).valueOf()
let f: boolean = new Boolean(a).valueOf()

let c = 'sdfs';
let d: number = parseInt(c);

interface User {
	name: string;
	email: string;
	login: string;
}

const user: User = {
	name: 'Вася',
	email: 'vasiliy@yandex.ru',
	login: 'vasia'
}

interface Admin {
	name: string;
	role: number;
}

const admin: Admin = {
	...user,
	role: 1
}

function userToAdmin(user: User): Admin {
	return {
		name: user.login,
		role: 1
	}
}
