import { join, dirname } from 'path';
import { fileURLToPath } from 'url';

const __dirname = dirname(fileURLToPath(import.meta.url));
const filesPath = join(__dirname, "..", "..", "..", "files");

export default filesPath;
