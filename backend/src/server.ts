import Fastify, { FastifyInstance } from "fastify";
import getDynamicRoutes from "./getDynamicRoutes.js";
import sequelize from "./entities/sequelize.js";
import Api from "./entities/api.entity.js";
import { sendFatalError } from "./utils/sendToWebhook.js";
import apiContentSchema from "./schema/apiSchema.js";

process.on('uncaughtException', async (err) => {
    console.error('Erreur non gérée :', err);
    try {
        await sendFatalError(err.name, err.message);
    } catch (sendError) {
        console.error('Erreur lors de l\'envoi de l\'erreur fatale :', sendError);
    }
    process.exit(1);
});

const apiContentData = apiContentSchema.safeParse({
    title: 'Exemple',
    description: 'Description de l\'exemple',
    body: [
        { type: 'text', content: 'Contenu texte' },
        { type: 'header', level: 5, content: 'En-tête de niveau 1' },
        { type: 'warning', title: 'Attention', content: 'Contenu de l\'avertissement' },
        {
            type: 'category',
            categories: [
                { title: 'Catégorie 1', content: [{ type: 'text', content: 'Contenu de la catégorie 1' }] },
                { title: 'Catégorie 2', content: [{ type: 'text', content: 'Contenu de la catégorie 2' }] },
            ]
        },
        { type: 'code', content: 'console.log("Hello, world!");' },
    ],
});

console.log(apiContentData);

const app: FastifyInstance = Fastify({ logger: true });

app.get("/", async (_request, _relpy) => {
    return "HEL";
});

const routes: Array<string> = await getDynamicRoutes(app);

await sequelize.sync();
await Api.sync();

console.log(routes);

app.listen({ port: 3000 }, (err, address) => {
    if (err) {
        app.log.error(err);
        process.exit(1);
    }
    console.log(`Server is running on port ${address}`);
});
