class DocumentItem {
	public text: string;
	private state: DocumentItemState;

	constructor() {
		this.setState(new DraftDocumentItemState());
	}

	getState() {
		return this.state;
	}

	setState(state: DocumentItemState) {
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

abstract class DocumentItemState {
	public name: string;
	public item: DocumentItem;

	public setContext(item: DocumentItem) {
		this.item = item
	}

	public abstract publish(): void;
	public abstract delete(): void;
}

class DraftDocumentItemState extends DocumentItemState {
	constructor() {
		super();
		this.name = 'DraftDocument';
	}
	public publish(): void {
		console.log(`На сайт отправлен текст ${this.item.text}`);
		this.item.setState(new PublishDocumentItemState());
	}
	public delete(): void {
		console.log('Документ удалён');
	}
}

class PublishDocumentItemState extends DocumentItemState {
	constructor() {
		super();
		this.name = 'PublishDocument';
	}
	public publish(): void {
		console.log('Нельзя опубликовать опубликованный документ');
	}
	public delete(): void {
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