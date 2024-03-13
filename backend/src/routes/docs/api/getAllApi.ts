import Api from "../../../entities/api.entity.js";
import ApiReturn from "./utils/apiReturn.js";

export default async function getAllApi(): Promise<ApiReturn> {
    const api = await Api.findAll();
    const title: Array<string> = api.map((api) => api.title);

    return { success: true, title };
}
