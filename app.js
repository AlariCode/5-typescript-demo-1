"use strict";
class Payment {
    constructor() {
        this.date = new Date();
        this.getDateArrow = () => {
            return this.date;
        };
    }
    getDate() {
        return this.date;
    }
}
const p = new Payment();
const user = {
    id: 1,
    paymentDate: p.getDate.bind(p),
    paymentDateArrow: p.getDateArrow
};
// console.log(p.getDate());
// console.log(user.paymentDate());
// console.log(user.paymentDateArrow());
class PaymentPersistent extends Payment {
    save() {
        return this.getDateArrow();
    }
}
console.log(new PaymentPersistent().save());
