"use strict";
class DocumentItem {
    constructor() {
        this.setState(new DraftDocumentItemState());
    }
    getState() {
        return this.state;
    }
    setState(state) {
        this.state = state;
        this.state.setContext(this);
    }
    publishDoc() {
        this.state.publish();
    }
    deleteDoc() {
        this.state.delete();
    }
}
class DocumentItemState {
    setContext(item) {
        this.item = item;
    }
}
class DraftDocumentItemState extends DocumentItemState {
    constructor() {
        super();
        this.name = 'DraftDocument';
    }
    publish() {
        console.log(`На сайт отправлен текст ${this.item.text}`);
        this.item.setState(new PublishDocumentItemState());
    }
    delete() {
        console.log('Документ удалён');
    }
}
class PublishDocumentItemState extends DocumentItemState {
    constructor() {
        super();
        this.name = 'PublishDocument';
    }
    publish() {
        console.log('Нельзя опубликовать опубликованный документ');
    }
    delete() {
        console.log('Снято с публикации');
        this.item.setState(new DraftDocumentItemState());
    }
}
const item = new DocumentItem();
item.text = 'Мой пост!';
console.log(item.getState());
item.publishDoc();
console.log(item.getState());
item.publishDoc();
item.deleteDoc();
console.log(item.getState());
