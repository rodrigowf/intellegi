
function getUrlVar(str, param) {
    let value = 0;
    const urlParts = str.split("?");
    const params = urlParts[1].split("&");
    params.forEach((part) => {
        const pair = part.split("=");
        if(pair[0] === param){
            value = pair[1];
        }
    });
    return value;
}

export default getUrlVar