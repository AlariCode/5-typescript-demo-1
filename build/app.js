"use strict";
class UserHistory {
    constructor(email, name) {
        this.email = email;
        this.name = name;
        this.createdAt = new Date();
    }
    clone() {
        let target = new UserHistory(this.email, this.name);
        target.createdAt = this.createdAt;
        return target;
    }
}
let user = new UserHistory('a@a.ru', 'Антон');
console.log(user);
let user2 = user.clone();
user2.email = 'b@b.ru';
console.log(user2);
console.log(user);
