import Api from "../../../entities/api.entity.js";
import ApiReturn from "./utils/apiReturn.js";
import { getApiBody } from "./utils/getApiBody.js";

export default async function getAllApi(): Promise<ApiReturn> {
    const api = await Api.findAll();

    api.forEach(ap => {
        ap.content = getApiBody(ap.title);
    });
    return { success: true, api };
}
