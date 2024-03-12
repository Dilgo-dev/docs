import Api from "../../../entities/api.entity";
import { sendError } from "../../../utils/sendToWebhook";
import ApiReturn from "./utils/apiReturn.js";

export default async function getApiByTitle(title: string): Promise<ApiReturn> {
    const api = await Api.findOne({ where: { title }});

    if (api)
        return { success: true, api };
    else {
        await sendError("Api not found", `Api with the title ${title} not found !`);
        return { success: false, error: `Api with the title ${title} not found !`};
    }
}
