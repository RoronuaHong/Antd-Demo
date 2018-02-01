import "whatwg-fetch";
import "es6-promise";

//拼接对象
function obj2Params(obj) {
    let result = "",
        item;

    for(item in obj) {
        result += "&" + item + "=" + encodeURIComponent(obj[item]);
    }

    result && (result = result.slice(1));

    return result;
}

//发送ajax请求
export function post(url, paramsObj) {
    const result = fetch(url, {
        method: "POST",
        headers: {
            credentials: "include",
            "Accept": "application/json, text/json, */*"
        },
        body: obj2Params(paramsObj)
    });
}