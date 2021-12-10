const n: null = null;
const n1: any = null;
const n2: number = null;
const n3: string = null;
const n4: boolean = null;
const n5: undefined = null;

interface User {
	name: string;
}

function getUser() {
	if (Math.random() > 0.5) {
		return null;
	} else {
		return {
			name: 'Вася'
		} as User
	}
}

const user = getUser();
if (user) {
	const n55 = user.name;
}