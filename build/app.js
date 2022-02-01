"use strict";
class User {
    constructor(userId) {
        this.userId = userId;
    }
}
class CommandHistory {
    constructor() {
        this.commands = [];
    }
    push(command) {
        this.commands.push(command);
    }
    remove(command) {
        this.commands = this.commands.filter(c => c.commandId !== command.commandId);
    }
}
class Command {
    constructor(history) {
        this.history = history;
        this.commandId = Math.random();
    }
}
class AddUserCommand extends Command {
    constructor(user, receiver, history) {
        super(history);
        this.user = user;
        this.receiver = receiver;
    }
    execute() {
        this.receiver.saveUser(this.user);
        this.history.push(this);
    }
    undo() {
        this.receiver.deleteUser(this.user.userId);
        this.history.remove(this);
    }
}
class UserService {
    saveUser(user) {
        console.log(`Сохраняю пользователя с id ${user.userId}`);
    }
    deleteUser(userId) {
        console.log(`Удаляем пользователя с id ${userId}`);
    }
}
class Controller {
    constructor() {
        this.history = new CommandHistory();
    }
    addReceiver(receiver) {
        this.reveiver = receiver;
    }
    run() {
        const addUserCommand = new AddUserCommand(new User(1), this.reveiver, this.history);
        addUserCommand.execute();
        console.log(addUserCommand.history);
        addUserCommand.undo();
        console.log(addUserCommand.history);
    }
}
const controller = new Controller();
controller.addReceiver(new UserService());
controller.run();
