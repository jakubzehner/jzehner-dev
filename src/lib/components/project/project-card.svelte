<script lang="ts">
	import * as Card from '$lib/components/ui/card/index.js';
	import { Badge } from '$lib/components/ui/badge/index.js';
	import { Button } from '$lib/components/ui/button/index.js';
	import { PROJECT_LINK_ICON_MAP, TECHNOLOGY_BADGE_MAP } from '$lib/mappings/project/mappings';
	import type { Project } from '$lib/schemas/project/schema';

	export let project: Project;
</script>

<Card.Root>
	<Card.Header>
		<Card.Title>
			<span class="text-xl font-bold">{project.title}</span>
		</Card.Title>
		{#if project.subtitle}
			<Card.Description class="text-base">
				{project.subtitle}
			</Card.Description>
		{/if}
	</Card.Header>

	<Card.Content>
		<p>{project.description}</p>

		{#each project.technologies as tech}
			<div class="pt-3">
				{tech.category}
				<div class="flex flex-wrap gap-1 p-1">
					{#each tech.badges as badge}
						{@const config = TECHNOLOGY_BADGE_MAP[badge]}
						<Badge variant="secondary">
							{#if config.icon}
								<svelte:component this={config.icon} />
							{/if}
							{config.label}
						</Badge>
					{/each}
				</div>
			</div>
		{/each}
	</Card.Content>

	<Card.Footer>
		<div class="flex flex-wrap gap-1 p-1">
			{#each project.buttons as button}
				{@const IconComponent = PROJECT_LINK_ICON_MAP[button.icon]}
				<Button
					class="min-h-fit max-w-full min-w-0 text-left break-words !whitespace-normal"
					target="_blank"
					rel="noopener noreferrer"
					href={button.href}
				>
					<svelte:component this={IconComponent} />
					{button.label}
				</Button>
			{/each}
		</div>
	</Card.Footer>
</Card.Root>
