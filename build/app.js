"use strict";
class Form {
    constructor(name) {
        this.name = name;
    }
}
class SaveForm {
    save(form) {
        const res = this.fill(form);
        this.log(res);
        this.send(res);
    }
    log(data) {
        console.log(data);
    }
    ;
}
class FirstAPI extends SaveForm {
    fill(form) {
        return form.name;
    }
    send(data) {
        console.log(`Отправляю ${data}`);
    }
}
class SecondAPI extends SaveForm {
    fill(form) {
        return { fio: form.name };
    }
    send(data) {
        console.log(`Отправляю ${data}`);
    }
}
const form1 = new FirstAPI();
form1.save(new Form('Вася'));
const form2 = new SecondAPI();
form2.save(new Form('Вася'));
