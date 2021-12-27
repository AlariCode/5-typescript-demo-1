"use strict";
class Contoller {
    handleWithLogs(req) {
        console.log('Start');
        this.handle(req);
        console.log('End');
    }
}
class UserController extends Contoller {
    handle(req) {
        console.log(req);
    }
}
const c = new UserController();
c.handleWithLogs('Request');
Math.random();
