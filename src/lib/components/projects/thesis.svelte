<script lang="ts">
	import * as Card from '$lib/components/ui/card/index.js';
	import { Badge } from '$lib/components/ui/badge/index.js';
	import { Button } from '$lib/components/ui/button/index.js';
	import {
		SiLatex,
		SiDiagramsdotnet,
		SiPython,
		SiGoogledocs,
		SiGithub,
		SiPytorch,
		SiPandas,
		SiScikitlearn,
		SiNumpy,
		SiHuggingface
	} from '@icons-pack/svelte-simple-icons';
</script>

<Card.Root>
	<Card.Header>
		<Card.Title><span class="text-xl font-bold">Master thesis</span></Card.Title>
		<Card.CardDescription class="text-base">
			Learning code change representations via artificial intelligence code model</Card.CardDescription
		>
	</Card.Header>
	<Card.Content>
		<p>
			My master's thesis focused on the problem of code change representation. The work presents a
			systematic review of existing research, a Python-based experimental framework, and a novel
			retrieval-augmented approach as an alternative to fine-tuning large models. The proposed
			methods demonstrated competitive performance while reducing computational cost.
		</p>

		<div class="pt-3">
			Package
			<div class="flex flex-wrap gap-1 p-1">
				<Badge variant="secondary"><SiPython />Python</Badge>
				<Badge variant="secondary"><SiPytorch />PyTorch</Badge>
				<Badge variant="secondary"><SiPandas />Pandas</Badge>
				<Badge variant="secondary"><SiScikitlearn />Scikit-learn</Badge>
				<Badge variant="secondary"><SiNumpy />NumPy</Badge>
				<Badge variant="secondary"><SiHuggingface />Hugging Face Transformers</Badge>
			</div>
		</div>

		<div class="pt-3">
			Thesis
			<div class="flex flex-wrap gap-1 p-1">
				<Badge variant="secondary"><SiLatex /> Latex</Badge>
				<Badge variant="secondary"><SiDiagramsdotnet /> Diagrams.net</Badge>
				<Badge variant="secondary">Matplotlib</Badge>
			</div>
		</div>
	</Card.Content>
	<Card.Footer>
		<div class="flex flex-wrap gap-1 p-1">
			<Button
				target="_blank"
				rel="noopener noreferrer"
				href="https://github.com/jakubzehner/MasterThesis"><SiGithub /> Repository</Button
			>
			<Button target="_blank" rel="noopener noreferrer" href="/static/masterthesis.pdf"
				><SiGoogledocs /> Thesis (EN)</Button
			>
		</div>
	</Card.Footer>
</Card.Root>
