export function post(endpoint, data) {
    let opts = {
        method: 'POST',
		// credentials: 'include',
		body: JSON.stringify(data || {}),
		headers: {
			'Content-Type': 'application/json'
		}
    }
	return fetch(endpoint, opts).then((r) => r.json());
}