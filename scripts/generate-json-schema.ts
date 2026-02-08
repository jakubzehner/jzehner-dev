import { writeFileSync, mkdirSync } from 'fs';
import { dirname, join } from 'path';
import { fileURLToPath } from 'url';
import { ProjectsSchema } from '../src/lib/schemas/project/schema';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const jsonSchema = ProjectsSchema.toJSONSchema();

const output = {
    $schema: 'http://json-schema.org/draft-07/schema#',
    ...jsonSchema,
    additionalProperties: true,
};

const outputPath = join(__dirname, '../src/lib/data/projects-schema.json');
mkdirSync(dirname(outputPath), { recursive: true });

writeFileSync(outputPath, JSON.stringify(output, null, 2));
console.log('✅ Generated static/projects-schema.json');