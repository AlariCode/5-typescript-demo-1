function getFullName(userEntity: { firstname: string, surname: string }): string {
	return `${userEntity.firstname} ${userEntity.surname}`;
}

const user = {
	firstname: 'Антон',
	surname: 'Ларичев',
	city: 'Moscow',
	age: 33,
	skills: {
		dev: true,
		devops: true
	}
};

console.log(getFullName(user));