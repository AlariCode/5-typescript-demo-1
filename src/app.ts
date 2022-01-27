class KVDatabase {
	private db: Map<string, string> = new Map();
	save(key: string, value: string) {
		this.db.set(key, value);
	}
}

class PersistentDB {
	savePersistent(data: Object) {
		console.log(data);
	}
}

class PersistentDBAdaper extends KVDatabase {
	constructor(public database: PersistentDB) {
		super();
	}

	override save(key: string, value: string): void {
		this.database.savePersistent({ key, value });
	}
}

function run(base: KVDatabase) {
	base.save('key', 'myValue');
}

run(new PersistentDBAdaper(new PersistentDB));