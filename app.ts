const skills: string[] = ['Dev', 'DevOps', 'Testing'];

for (const skill of skills) {
	console.log(skill.toLowerCase());
}

const res = skills
	.filter((s: string) => s !== 'DevOps')
	.map(s => { return 1 })
	.reduce((a, b) => a + b);

console.log(res);