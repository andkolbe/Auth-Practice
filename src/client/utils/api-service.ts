export const TOKEN_KEY = 'token';

export default async <T = any>(uri: string, method: string = 'GET', body?: {}) => {

    const Token = localStorage.getItem(TOKEN_KEY);
    const headers = new Headers();
    const options: {[ key: string ]: string | Headers} = {
        method,
        headers
    }

    if (method === 'POST' || method === 'PUT') {
        headers.append('Content-Type', 'application/json')
        options.body = JSON.stringify(body);
    }

    if (Token) {
        headers.append('Authorization', `Bearer ${Token}`);
    }

    try {
        const res = await fetch(uri, options)

        if (res.status === 404) {
            throw new Error('path not found. Check server routes or URI!')
        }

        if (res.status === 401) {
            throw new Error('token is invalid or does not exist')
        }

        if (res.status === 500) {
            throw new Error('my server code sucks :( check terminal!')
        }

        if (res.ok) { // status codes 200s and 300s are ok
            return <T>await res.json();
        }

    } catch (error) { // the specific error is thrown down here
        console.log(error); // and then logged
    }

}