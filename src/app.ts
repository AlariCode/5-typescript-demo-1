class Resp<D, E> {
	data?: D;
	error?: E;

	constructor(data?: D, error?: E) {
		if (data) {
			this.data = data;
		}
		if (error) {
			this.error = error;
		}
	}
}

const res = new Resp<string, number>('data');

class HTTPResp<F> extends Resp<string, number>  {
	code: F;

	setCode(code: F) {
		this.code = code;
	}
}

const res2 = new HTTPResp();