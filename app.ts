interface ILogger {
	log(...args): void;
	error(...args): void;
}

class Looger implements ILogger {
	log(...args: any[]): void {
		console.log(...args);
	}
	async error(...args: any[]): Promise<void> {
		// Кинуть во внешнюю систему
		console.log(...args);
	}
}

interface IPayable {
	pay(paymentId: number): void;
	price?: number;
}

class User implements IPayable {
	pay(paymentId: number | string): void {
		///
	}
}
