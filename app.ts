function logId(id: string | number): void {
	console.log(id);
}

const a = logId(1);

function multiply(f: number, s?: number) {
	if (!s) {
		return f * f;
	}
}

type voidFunc = () => void;

const f1: voidFunc = () => {

}

const f2: voidFunc = () => {
	return true
}

const b = f2();

const skills = ['Dev', 'DevOps'];

const user = {
	s: ['s']
}

skills.forEach((skill) => user.s.push(skill));