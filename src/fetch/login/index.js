import { get } from "../get";
import { post } from "../post";

export function loginInfo(values) {
    const result = post("/manage/login", values);

    return result;
}