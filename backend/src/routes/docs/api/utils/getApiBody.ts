import { readFileSync } from "fs";
import { join } from "path";
import apiPath from "./apiPath.js";
import { sendError } from "../../../../utils/sendToWebhook.js";

export function getApiBody(title: string) {
    try {
        return JSON.parse(readFileSync(join(apiPath, title)).toString());
    } catch (err) {
        console.log("ERROR PARSING API BODY");
        sendError("Parsing", `Cannot parse the body of the api name ${title}`);
        return { title: "Error", description: "Error in parsing the api body"};
    }
}
