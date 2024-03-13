import Api from "../../../entities/api.entity";
import { sendError } from "../../../utils/sendToWebhook";
import ApiReturn from "./utils/apiReturn.js";
import { getApiBody } from "./utils/getApiBody";

export default async function getApiByTitle(title: string): Promise<ApiReturn> {
    const api = await Api.findOne({ where: { title }});

    if (api) {
        const title: string = api.title;
        return { success: true, title, content: getApiBody(title) };
    } else {
        await sendError("Api not found", `Api with the title ${title} not found !`);
        return { success: false, error: `Api with the title ${title} not found !`};
    }
}
