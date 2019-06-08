
export default function getUrlVar(str, param) {
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

export function textTruncate(str, length, ending) {
    if (length == null) {
        length = 100;
    }
    if (ending == null) {
        ending = ' ...';
    }
    if (str.length > length) {
        return str.substring(0, length - ending.length) + ending;
    } else {
        return str;
    }
}