class Notify {
	send(template: string, to: string) {
		console.log(`Отправляю ${template}: ${to}`);
	}
}

class Log {
	log(message: string) {
		console.log(message);
	}
}

class Tempate {
	private templates = [
		{ name: 'other', template: '<h1>Шаблон!</h1>' }
	];

	getByName(name: string) {
		return this.templates.find(t => t.name === name);
	}
}

class NotificationFacade {
	private notify: Notify;
	private logger: Log;
	private template: Tempate;

	constructor() {
		this.notify = new Notify();
		this.template = new Tempate();
		this.logger = new Log();
	}


	send(to: string, templateName: string) {
		const data = this.template.getByName(templateName);
		if (!data) {
			this.logger.log('Не найден шаблон');
			return;
		}
		this.notify.send(data.template, to);
		this.logger.log('Шаблон отправлен');
	}
}

const s = new NotificationFacade();
s.send('a@a.ru', 'other');