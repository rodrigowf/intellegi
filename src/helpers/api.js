class Requests {

    static API = 'https://dadosabertos.camara.leg.br/api/v2/';

    static get(path, params) {
        let pathName = path.constructor === Array ? path.join('/') : path;
        let uri = this.API + pathName + '?' +
            Object.entries(params)
                .map(([value, key]) => (value+'='+key)).join('&');
        console.log(uri);
        return fetch(uri).then(response => response.json());
    }
}

export default Requests;