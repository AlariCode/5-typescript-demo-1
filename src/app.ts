class User {
	role?: 'admin' | 'user';

	constructor(private name: string) {
	}

	login(): void { }
}

function createUser(user: User) {
	// логика
	const defaultUser = new User('defauilt');
	defaultUser.role = undefined;

	switch (user.role) {
		case 'admin':
			const a = 7;
		case 'user':
			return true;
			const c = 1;
	}
}

interface IChecks {
	[check: string]: boolean;
}
const c: IChecks = { kpp: true };
const d = c['drive'];
c.drive

class VipUser extends User {
	override login(): void {

	}
}