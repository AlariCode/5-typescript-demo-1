"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Product = exports.Package = exports.DeliveryShop = void 0;
class DeliveryItem {
    constructor() {
        this.items = [];
    }
    addItem(item) {
        this.items.push(item);
    }
    getItemPrices() {
        return this.items.reduce((acc, i) => acc += i.getPrice(), 0);
    }
}
class DeliveryShop extends DeliveryItem {
    constructor(deliveryFee) {
        super();
        this.deliveryFee = deliveryFee;
    }
    getPrice() {
        return this.getItemPrices() + this.deliveryFee;
    }
}
exports.DeliveryShop = DeliveryShop;
class Package extends DeliveryItem {
    getPrice() {
        return this.getItemPrices();
    }
}
exports.Package = Package;
class Product extends DeliveryItem {
    constructor(price) {
        super();
        this.price = price;
    }
    getPrice() {
        return this.price;
    }
}
exports.Product = Product;
const shop = new DeliveryShop(100);
shop.addItem(new Product(1000));
const pack1 = new Package();
pack1.addItem(new Product(200));
pack1.addItem(new Product(300));
shop.addItem(pack1);
const pack2 = new Package();
pack2.addItem(new Product(30));
shop.addItem(pack2);
console.log(shop.getPrice());
