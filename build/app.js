"use strict";
class User {
}
class Auth {
    constructor(strategy) {
        this.strategy = strategy;
    }
    setStategy(strategy) {
        this.strategy = strategy;
    }
    authUser(user) {
        return this.strategy.auth(user);
    }
}
class JWTStrategy {
    auth(user) {
        if (user.jwtToken) {
            return true;
        }
        return false;
    }
}
class GithubStrategy {
    auth(user) {
        if (user.guthubToken) {
            // Идём в API
            return true;
        }
        return false;
    }
}
const user = new User();
user.jwtToken = 'token';
const auth = new Auth(new JWTStrategy());
console.log(auth.authUser(user));
auth.setStategy(new GithubStrategy());
console.log(auth.authUser(user));
