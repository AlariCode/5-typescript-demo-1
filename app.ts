function fetchWithAuth(url: string, method: 'post' | 'get'): 1 | -1 {
	return 1;
}

fetchWithAuth('s', 'post');

let method = 'post';

fetchWithAuth('s', method as 'post');