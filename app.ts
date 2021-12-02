function getFullName(firstname: string, surname: string): string {
	return `${firstname} ${surname}`;
}

const getFullNameArrow = (firstname: string, surname: string): string => {
	return `${firstname} ${surname}`;
}

console.log(getFullName('Антон', 'Ларичев'));