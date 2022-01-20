interface IUserService {
	users: number;
	getUsersInDatabase(): number;
}

@nullUser
@threeUserAdvanced
class UserService implements IUserService {
	users: number = 1000;

	getUsersInDatabase(): number {
		return this.users;
	}
}

function nullUser(target: Function) {
	target.prototype.users = 0;
}

function threeUserAdvanced<T extends { new(...args: any[]): {} }>(constructor: T) {
	return class extends constructor {
		users = 3;
	}
}

console.log(new UserService().getUsersInDatabase());