interface Mediator {
	notify(sender: string, event: string): void;
}

abstract class Mediated {
	mediator: Mediator;
	setMediator(mediator: Mediator) {
		this.mediator = mediator;
	}
}

class Notifications {
	send() {
		console.log('Отправляю уведомление');
	}
}

class Log {
	log(message: string) {
		console.log(message);
	}
}

class EventHandler extends Mediated {
	myEvent() {
		this.mediator.notify('EventHandler', 'myEvent');
	}
}

class NotificationMediator implements Mediator {
	constructor(
		public notificaitons: Notifications,
		public logger: Log,
		public handler: EventHandler
	) { }

	notify(_: string, event: string): void {
		switch (event) {
			case 'myEvent':
				this.notificaitons.send();
				this.logger.log('Отправлено');
				break;
		}
	}
}

const handler = new EventHandler();
const logger = new Log();
const notificaions = new Notifications();

const m = new NotificationMediator(
	notificaions,
	logger,
	handler
);
handler.setMediator(m);
handler.myEvent();