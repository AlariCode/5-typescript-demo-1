"use strict";
class Contoller {
    handleWithLogs(req) {
        console.log('Start');
        this.handle(req);
        console.log('End');
    }
}
class UserController extends Contoller {
    constructor() {
        super(...arguments);
        Object.defineProperty(this, "db", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: void 0
        });
    }
    handle(req) {
        console.log(req);
    }
}
const c = new UserController();
c.handleWithLogs('Request');
Math.random();
