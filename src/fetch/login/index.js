import { get } from "../get";
import { post } from "../post";

export function loginInfo(values) {
    const result = post("/manage/login?iSaJAx=isAjax", values);

    return result;
}

export function isLogin() {
    const result = get("/manage/company/detail?iSaJAx=isAjax");

    console.log(result);
    return result;
}