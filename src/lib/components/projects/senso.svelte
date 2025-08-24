<script lang="ts">
	import * as Card from '$lib/components/ui/card/index.js';
	import { Badge } from '$lib/components/ui/badge/index.js';
	import { Button } from '$lib/components/ui/button/index.js';
	import {
		SiTypescript,
		SiReact,
		SiJest,
		SiCss,
		SiDotnet,
		SiC,
		SiPostgresql,
		SiDocker,
		SiOpenapiinitiative,
		SiLatex,
		SiUml,
		SiFigma,
		SiGithubactions,
		SiGithub,
		SiGnubash,
		SiGoogledocs
	} from '@icons-pack/svelte-simple-icons';
</script>

<Card.Root>
	<Card.Header>
		<Card.Title><span class="text-xl font-bold">Senso</span></Card.Title>
	</Card.Header>
	<Card.Content>
		<p>
			A group project built for my engineering thesis. A mobile application that aids the elderly in
			their daily life, including features such as medication reminders, emergency contacts, and an
			SOS button.
		</p>

		<div class="pt-3">
			Server
			<div class="flex flex-wrap gap-1 p-1">
				<Badge variant="secondary"><SiC />C#</Badge>
				<Badge variant="secondary"><SiDotnet />.NET</Badge>
				<Badge variant="secondary"><SiPostgresql /> PostgreSQL</Badge>
				<Badge variant="secondary">Entity Framework</Badge>
				<Badge variant="secondary">MediatR</Badge>
				<Badge variant="secondary">xUnit.Net</Badge>
			</div>
		</div>

		<div class="pt-3">
			Mobile app
			<div class="flex flex-wrap gap-1 p-1">
				<Badge variant="secondary"><SiTypescript /> TypeScript</Badge>
				<Badge variant="secondary"><SiReact /> React Native</Badge>
				<Badge variant="secondary"><SiReact /> React</Badge>
				<Badge variant="secondary"><SiJest /> Jest</Badge>
				<Badge variant="secondary"><SiCss /> CSS</Badge>
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
				<Badge variant="secondary"><SiGithubactions /> GitHub Actions</Badge>
				<Badge variant="secondary"><SiGnubash /> Bash</Badge>
			</div>
		</div>
	</Card.Content>
	<Card.Footer>
		<div class="flex flex-wrap gap-1 p-1">
			<Button
				target="_blank"
				rel="noopener noreferrer"
				href="https://github.com/zpi-2023/SensoBackend"><SiGithub /> Repository - Server</Button
			>
			<Button
				target="_blank"
				rel="noopener noreferrer"
				href="https://github.com/zpi-2023/senso-frontend"
				><SiGithub /> Repository - Mobile app</Button
			>
			<Button target="_blank" rel="noopener noreferrer" href="/senso.pdf"
				><SiGoogledocs /> Documentation (PL)</Button
			>
		</div>
	</Card.Footer>
</Card.Root>
