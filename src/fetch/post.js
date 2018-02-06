import "whatwg-fetch";
import "es6-promise";
import qs from "qs";

//发送ajax请求
export function post(url, paramsObj) {
    const result = fetch(url, {
        method: "POST",
        credentials: "include",
        headers: {
            "Accept": "application/json, text/json, */*",
            "Content-Type": "application/x-www-form-urlencoded"
        },
        body: qs.stringify(paramsObj)
    });

    return result;
}