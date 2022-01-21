interface IUserService {
	users: number;
	getUsersInDatabase(): number;
}

class UserService implements IUserService {
	@Max(100)
	users: number;

	getUsersInDatabase(): number {
		throw new Error('Ошибка');
	}
}

function Max(max: number) {
	return (
		target: Object,
		propertyKey: string | symbol
	) => {
		let value: number;
		const setter = function (newValue: number) {
			if (newValue > max) {
				console.log(`Нельзя установить значение больше ${max}`);
			} else {
				value = newValue;
			}
		}

		const getter = function () {
			return value;
		}

		Object.defineProperty(target, propertyKey, {
			set: setter,
			get: getter
		});
	}
}
const userService = new UserService();
userService.users = 1;
console.log(userService.users);
userService.users = 1000;
console.log(userService.users);