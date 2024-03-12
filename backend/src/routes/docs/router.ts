import { FastifyInstance } from "fastify";
import Api from "../../entities/api.entity.js";
import getAllApi from "./api/getAllApi.js";
import { getApiBody } from "./api/utils/getApiBody.js";

export default function router(app: FastifyInstance, option: any, done: any) {

    // Api docs
    app.get("/api/", async (_request, _relpy) => {
        return await getAllApi();
    });

    app.get("/api/:title", async (request, relpy) => {
        const { title } = request.params as { title: string };
        const api = Api.findOne({ where: { title } });
        const content = getApiBody(title);

        return { success: true, api, content };
    });

    app.post("/api/:title", async (request, relpy) => {
        const { title } = request.params as { title: string };
        const api = Api.findOne({ where: { title } });
        const content = getApiBody(title);

        return { success: true, api, content };
    });

    done();
}
