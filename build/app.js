"use strict";
class Mediated {
    setMediator(mediator) {
        this.mediator = mediator;
    }
}
class Notifications {
    send() {
        console.log('Отправляю уведомление');
    }
}
class Log {
    log(message) {
        console.log(message);
    }
}
class EventHandler extends Mediated {
    myEvent() {
        this.mediator.notify('EventHandler', 'myEvent');
    }
}
class NotificationMediator {
    constructor(notificaitons, logger, handler) {
        this.notificaitons = notificaitons;
        this.logger = logger;
        this.handler = handler;
    }
    notify(_, event) {
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
const m = new NotificationMediator(notificaions, logger, handler);
handler.setMediator(m);
handler.myEvent();
