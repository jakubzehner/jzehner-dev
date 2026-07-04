import { writeFileSync, mkdirSync } from 'fs';
import { dirname, join } from 'path';
import { fileURLToPath } from 'url';
import { format, resolveConfig } from 'prettier';
import { ProfileSchema } from '../src/lib/schemas/profile/schema';
import { ProjectsSchema } from '../src/lib/schemas/project/schema';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const dataDir = join(__dirname, '../src/lib/data');
mkdirSync(dataDir, { recursive: true });

const targets = [
	{ schema: ProjectsSchema, fileName: 'projects-schema.json' },
	{ schema: ProfileSchema, fileName: 'profile-schema.json' }
];

for (const { schema, fileName } of targets) {
	const output = {
		$schema: 'http://json-schema.org/draft-07/schema#',
		...schema.toJSONSchema(),
		additionalProperties: true
	};

	const outputPath = join(dataDir, fileName);

	// Format with the project's Prettier config so the generated file always passes lint.
	const prettierConfig = await resolveConfig(outputPath);
	const formatted = await format(JSON.stringify(output), {
		...prettierConfig,
		filepath: outputPath
	});

	writeFileSync(outputPath, formatted);
	console.log(`✅ Generated src/lib/data/${fileName}`);
}
