import { FastifyInstance } from "fastify";
import { existsSync, readdirSync } from "fs";
import { join, dirname } from "path";
import { fileURLToPath } from 'url';

const __dirname: string = dirname(fileURLToPath(import.meta.url));
const routesPath: string = join(__dirname, "routes");

export default async function getDynamicRoutes(app: FastifyInstance): Promise<Array<string>> {
    if (!existsSync(routesPath)) return new Array();
    const routes: Array<string> = new Array();

    for (const route of readdirSync(routesPath)) {
        const routerPath: string = join(routesPath, route, "router.js");
        if (existsSync(routerPath)) {
            routes.push(route);
            app.register((await import(routerPath)).default, {
                prefix: `/${route}`
            })
        }
    }
    return routes;
}
