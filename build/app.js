"use strict";
class List {
    constructor(items) {
        this.items = items;
    }
}
class ExtendedListClass extends List {
    first() {
        return this.items[0];
    }
}
function ExtendedList(Base) {
    return class ExtendedList extends Base {
        first() {
            return this.items[0];
        }
    };
}
const list = ExtendedList(List);
const res = new list(['first', 'second']);
console.log(res.first());
