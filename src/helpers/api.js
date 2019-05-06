const API = 'https://dadosabertos.camara.leg.br/api/v2/';

function getDataRequest(apiArea, pageNum, numItems, onrder='DESC', orderBy='id') {

    let uri = API+apiArea+"?pagina="+(pageNum+1)+"&itens="+numItems+"&ordem="+onrder+"&ordenarPor="+orderBy;
    // console.log(uri);

    return fetch(uri).then(response => response.json());
}

export default getDataRequest;