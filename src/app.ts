import 'reflect-metadata';

const POSITIVE_METADATA_KEY = Symbol('POSITIVE_METADATA_KEY');

interface IUserService {
	getUsersInDatabase(): number;
}

class UserService implements IUserService {
	private _users: number;

	getUsersInDatabase(): number {
		return this._users;
	}

	@Validate()
	setUsersInDatabase(@Positive() num: number): void {
		this._users = num;
	}
}

function Positive() {
	return (
		target: Object,
		propertyKey: string | symbol,
		parameterIndex: number
	) => {
		console.log(Reflect.getOwnMetadata('design:type', target, propertyKey));
		console.log(Reflect.getOwnMetadata('design:paramtypes', target, propertyKey));
		console.log(Reflect.getOwnMetadata('design:returntype', target, propertyKey));
		let existParams: number[] = Reflect.getOwnMetadata(POSITIVE_METADATA_KEY, target, propertyKey) || [];
		existParams.push(parameterIndex);
		Reflect.defineMetadata(POSITIVE_METADATA_KEY, existParams, target, propertyKey);
	}
}

function Validate() {
	return (
		target: Object,
		propertyKey: string | symbol,
		descriptor: TypedPropertyDescriptor<(...args: any[]) => any>
	) => {
		let method = descriptor.value;
		descriptor.value = function (...args: any) {
			let positiveParams: number[] = Reflect.getOwnMetadata(POSITIVE_METADATA_KEY, target, propertyKey);
			if (positiveParams) {
				for (let index of positiveParams) {
					if (args[index] < 0) {
						throw new Error('Число должно быть больше нуля');
					}
				}
			}
			return method?.apply(this, args);
		}
	}
}

const userService = new UserService();
console.log(userService.setUsersInDatabase(10));
console.log(userService.setUsersInDatabase(-1));