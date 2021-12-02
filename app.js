"use strict";
function getFullName(userEntity) {
    return `${userEntity.firstname} ${userEntity.surname}`;
}
const user = {
    firstname: 'Антон',
    surname: 'Ларичев',
    city: 'Moscow',
    age: 33
};
console.log(getFullName(user));
