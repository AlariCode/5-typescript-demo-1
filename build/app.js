"use strict";
class UserService {
    constructor() {
        this.users = 1000;
    }
    getUsersInDatabase() {
        return this.users;
    }
}
function nullUser(obj) {
    obj.users = 0;
    return obj;
}
function logUsers(obj) {
    console.log('Users: ' + obj.users);
    return obj;
}
console.log(new UserService().getUsersInDatabase());
console.log(nullUser(new UserService()).getUsersInDatabase());
console.log(logUsers(nullUser(new UserService())).getUsersInDatabase());
console.log(nullUser(logUsers(new UserService())).getUsersInDatabase());
