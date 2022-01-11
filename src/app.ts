interface User {
	name: string;
	age?: number;
	email: string;
}

type patrial = Partial<User>;
const p: patrial = {};

type required = Required<User>;
type readonly = Readonly<User>;
type requiredAndReadonly = Required<Readonly<User>>;