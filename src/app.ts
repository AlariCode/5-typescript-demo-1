type ReadOrWrite = 'read' | 'write';

type Access = `can${Capitalize<ReadOrWrite>}`;

type ReadOrWriteBulk<T> = T extends `can${infer R}` ? R : never;

type T = ReadOrWriteBulk<Access>;

type ErrorOrSuccess = 'error' | 'success';

type ResponseT = {
	result: `http${Capitalize<ErrorOrSuccess>}`
}

const a2: ResponseT = {
	result: 'httpSuccess'
}