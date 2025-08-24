<script lang="ts">
	import * as Card from '$lib/components/ui/card/index.js';
	import { Badge } from '$lib/components/ui/badge/index.js';
	import { Button } from '$lib/components/ui/button/index.js';
	import {
		SiTypescript,
		SiShadcnui,
		SiTailwindcss,
		SiSvelte,
		SiVite,
		SiPython,
		SiElasticsearch,
		SiPostgresql,
		SiFastapi,
		SiDocker,
		SiOpenapiinitiative,
		SiLatex,
		SiUml,
		SiFigma,
		SiGithub
	} from '@icons-pack/svelte-simple-icons';
</script>

<Card.Root>
	<Card.Header>
		<Card.Title><span class="text-xl font-bold">ArXiv search</span></Card.Title>
	</Card.Header>
	<Card.Content>
		<p>
			A web application that allows users to search for academic papers on arXiv.org. It offers
			features such as advanced search filters, faceted search and user-friendly navigation.
			Designed and implemented for the Information Retrieval Systems university course.
		</p>

		<div class="pt-3">
			Backend
			<div class="flex flex-wrap gap-1 p-1">
				<Badge variant="secondary"><SiPython /> Python</Badge>
				<Badge variant="secondary"><SiElasticsearch /> Elasticsearch</Badge>
				<Badge variant="secondary"><SiPostgresql /> PostgreSQL</Badge>
				<Badge variant="secondary"><SiFastapi /> FastAPI</Badge>
			</div>
		</div>

		<div class="pt-3">
			Frontend
			<div class="flex flex-wrap gap-1 p-1">
				<Badge variant="secondary"><SiTypescript /> TypeScript</Badge>
				<Badge variant="secondary"><SiSvelte /> Svelte</Badge>
				<Badge variant="secondary"><SiVite /> Vite</Badge>
				<Badge variant="secondary"><SiTailwindcss /> Tailwind CSS</Badge>
				<Badge variant="secondary"><SiShadcnui /> Shadcn-svelte</Badge>
			</div>
		</div>

		<div class="pt-3">
			Tools
			<div class="flex flex-wrap gap-1 p-1">
				<Badge variant="secondary"><SiDocker /> Docker</Badge>
				<Badge variant="secondary"><SiLatex /> LaTeX</Badge>
				<Badge variant="secondary"><SiUml /> UML</Badge>
				<Badge variant="secondary"><SiOpenapiinitiative /> OpenAPI</Badge>
				<Badge variant="secondary"><SiFigma /> Figma</Badge>
				<Badge variant="secondary"><SiGithub /> GitHub</Badge>
			</div>
		</div>
	</Card.Content>
	<Card.Footer>
		<div class="flex flex-wrap gap-1 p-1">
			<Button
				target="_blank"
				rel="noopener noreferrer"
				href="https://github.com/PWR-ACS-SE-24/InformationRetrievalSystems"
				><SiGithub /> Repository
			</Button>
		</div>
	</Card.Footer>
</Card.Root>
