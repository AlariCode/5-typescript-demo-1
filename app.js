"use strict";
var User = /** @class */ (function () {
    function User(name) {
        this.name = name;
    }
    return User;
}());
var user = new User('Вася');
console.log(user);
user.name = 'Петя';
console.log(user);
