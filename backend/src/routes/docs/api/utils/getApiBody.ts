import { existsSync, readFileSync } from "fs";
import { join } from "path";
import apiPath from "./apiPath.js";
import { sendError } from "../../../../utils/sendToWebhook.js";
import apiContentSchema, { ApiContent } from "../../../../schema/apiSchema.js";

export function errorApiContent(title: string, error: string, titleLog: string, errorLog: string): ApiContent {
    sendError(titleLog, errorLog); 
    return { 
        title: title,
        description: error,
        body: []
    };
}

export function getApiBody(title: string): ApiContent {
    try {
        const path: string = join(apiPath, title);
 
        if (!existsSync(path)) return errorApiContent(
            "Error",
            "Error in parsing the api body",
            "ExistSync",
            `Cannot find the path of the api named ${title}`
        );

        const body = apiContentSchema.safeParse(
            JSON.parse(readFileSync(path).toString())
        );

        if (body.success) return body.data;
        return errorApiContent(
            "Error",
            "Error in parsing the api body",
            "SafeParse",
            `Cannot parse the body of the api named ${title}`
        );
    } catch (err) {
        return errorApiContent(
            "Error",
            "Error in parsing the api body",
            "JsonParse",
            `Cannot parse the body of the api named ${title}`
        );
    }
}
