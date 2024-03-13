import Api from "../../../entities/api.entity.js";
import ApiReturn from "./utils/apiReturn.js";

export default async function createApiByTitle(title: string): Promise<ApiReturn> {
    await Api.create({ title });
    return { success: true, title };
}
