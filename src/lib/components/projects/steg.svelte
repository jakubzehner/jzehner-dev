<script lang="ts">
	import * as Card from '$lib/components/ui/card/index.js';
	import { Badge } from '$lib/components/ui/badge/index.js';
	import { Button } from '$lib/components/ui/button/index.js';
	import {
		SiGithub,
		SiTypescript,
		SiRust,
		SiWebassembly,
		SiAngular,
		SiLodash,
		SiReactivex,
		SiCss,
		SiGithubactions,
		SiGooglecloud
	} from '@icons-pack/svelte-simple-icons';
</script>

<Card.Root>
	<Card.Header>
		<Card.Title><span class="text-xl font-bold">Image Steganography</span></Card.Title>
	</Card.Header>
	<Card.Content>
		<p>
			An online web application was created that allows users to hide messages in images using
			techniques such as LSB, DCT, and visual cryptography. Designed and implemented for the
			Engineering of Security and Knowledge Acquisition from Data and Databases university course.
		</p>

		<div class="pt-3">
			Web app
			<div class="flex flex-wrap gap-1 p-1">
				<Badge variant="secondary"><SiTypescript /> TypeScript</Badge>
				<Badge variant="secondary"><SiRust /> Rust</Badge>
				<Badge variant="secondary"><SiWebassembly /> WebAssembly</Badge>
				<Badge variant="secondary"><SiAngular /> Angular</Badge>
				<Badge variant="secondary"><SiGithubactions /> GitHub Actions</Badge>
				<Badge variant="secondary"><SiReactivex /> RxJs</Badge>
				<Badge variant="secondary"><SiLodash /> Lodash</Badge>
				<Badge variant="secondary"><SiCss /> CSS</Badge>
			</div>
		</div>
	</Card.Content>
	<Card.Footer>
		<div class="flex flex-wrap gap-1 p-1">
			<Button
				target="_blank"
				rel="noopener noreferrer"
				href="https://github.com/PWR-ACS-SE-24/EoSaKAfDaD"
				><SiGithub /> Repository
			</Button>
			<Button
				target="_blank"
				rel="noopener noreferrer"
				href="https://pwr-acs-se-24.github.io/EoSaKAfDaD/#/"><SiGooglecloud /> Live demo</Button
			>
		</div>
	</Card.Footer>
</Card.Root>
