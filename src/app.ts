class User {
	constructor(public userId: number) { }
}

class CommandHistory {
	public commands: Command[] = [];
	push(command: Command) {
		this.commands.push(command);
	}
	remove(command: Command) {
		this.commands = this.commands.filter(c => c.commandId !== command.commandId);
	}
}

abstract class Command {
	public commandId: number;

	abstract execute(): void;

	constructor(public history: CommandHistory) {
		this.commandId = Math.random();
	}
}

class AddUserCommand extends Command {
	constructor(
		private user: User,
		private receiver: UserService,
		history: CommandHistory
	) {
		super(history);
	}

	execute(): void {
		this.receiver.saveUser(this.user);
		this.history.push(this);
	}

	undo() {
		this.receiver.deleteUser(this.user.userId);
		this.history.remove(this);
	}
}

class UserService {
	saveUser(user: User) {
		console.log(`Сохраняю пользователя с id ${user.userId}`);
	}
	deleteUser(userId: number) {
		console.log(`Удаляем пользователя с id ${userId}`);
	}
}

class Controller {
	reveiver: UserService;
	history: CommandHistory = new CommandHistory();

	addReceiver(receiver: UserService) {
		this.reveiver = receiver;
	}

	run() {
		const addUserCommand = new AddUserCommand(
			new User(1),
			this.reveiver,
			this.history
		);
		addUserCommand.execute();
		console.log(addUserCommand.history);
		addUserCommand.undo();
		console.log(addUserCommand.history);
	}
}

const controller = new Controller();
controller.addReceiver(new UserService());
controller.run();