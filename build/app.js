"use strict";
class MyMap {
    constructor() {
        this.map = new Map();
    }
    clean() {
        this.map = new Map();
    }
    static get() {
        if (!MyMap.instance) {
            MyMap.instance = new MyMap();
        }
        return MyMap.instance;
    }
}
class Service1 {
    addMap(key, value) {
        const myMap = MyMap.get();
        myMap.map.set(key, value);
    }
}
class Service2 {
    getKeys(key) {
        const myMap = MyMap.get();
        console.log(myMap.map.get(key));
        myMap.clean();
        console.log(myMap.map.get(key));
    }
}
new Service1().addMap(1, 'Работает!');
new Service2().getKeys(1);
