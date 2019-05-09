class Requests {

    static API = 'https://dadosabertos.camara.leg.br/api/v2/';

    static get(apiArea, params) {
        let uri = this.API + apiArea + '?' +
            Object.entries(params)
                .map(([value, key]) => (value+'='+key)).join('&');
        console.log(uri);
        return fetch(uri).then(response => response.json());
    }
}

export default Requests;