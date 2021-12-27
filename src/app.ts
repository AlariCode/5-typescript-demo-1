abstract class Contoller {
	abstract handle(req: any): void;

	handleWithLogs(req: any) {
		console.log('Start');
		this.handle(req);
		console.log('End');
	}
}

class UserController extends Contoller {
	db: any;
	handle(req: any): void {
		console.log(req);
	}
}


const c = new UserController();
c.handleWithLogs('Request');
Math.random();