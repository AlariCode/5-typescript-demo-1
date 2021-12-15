"use strict";
class User {
    constructor(ageOrName, age) {
        if (typeof ageOrName === 'string') {
            this.name = ageOrName;
        }
        else if (typeof ageOrName === 'number') {
            this.age = ageOrName;
        }
        if (typeof age === 'number') {
            this.age = age;
        }
    }
}
const user = new User('Вася');
const user2 = new User();
const user3 = new User(33);
const user4 = new User('Вася', 33);
