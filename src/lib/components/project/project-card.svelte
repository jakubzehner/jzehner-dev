<script lang="ts">
	import * as Card from '$lib/components/ui/card/index.js';
	import { Badge } from '$lib/components/ui/badge/index.js';
	import { Button } from '$lib/components/ui/button/index.js';
	import { PROJECT_LINK_ICON_MAP, TECHNOLOGY_BADGE_MAP } from '$lib/mappings/project/mappings';
	import type { Project } from '$lib/schemas/project/schema';

	let { project }: { project: Project } = $props();

	const slug = $derived(project.title.toLowerCase().replace(/\s+/g, '-'));
</script>

<Card.Root
	id={slug}
	class="scroll-mt-20 gap-5 border-border/70 bg-card/40 transition-colors duration-300 hover:border-primary/25 hover:bg-card/70"
>
	<Card.Header class="gap-1.5">
		<div class="flex items-baseline justify-between gap-4">
			<Card.Title class="text-lg font-semibold tracking-tight text-balance">
				{project.title}
			</Card.Title>
			{#if project.year}
				<span class="shrink-0 font-mono text-xs text-muted-foreground">{project.year}</span>
			{/if}
		</div>
		{#if project.subtitle}
			<Card.Description class="text-sm">{project.subtitle}</Card.Description>
		{/if}
	</Card.Header>

	<Card.Content class="space-y-5">
		<p class="text-sm leading-relaxed text-pretty text-muted-foreground">{project.description}</p>

		<dl class="space-y-3">
			{#each project.technologies as tech (tech.category)}
				<div class="grid gap-1.5 sm:grid-cols-[7rem_1fr] sm:gap-4">
					<dt class="pt-1 font-mono text-[11px] tracking-wider text-muted-foreground/80 uppercase">
						{tech.category}
					</dt>
					<dd class="flex flex-wrap gap-1.5">
						{#each tech.badges as badge (badge)}
							{@const config = TECHNOLOGY_BADGE_MAP[badge]}
							<Badge
								variant="secondary"
								class="gap-1.5 border border-border/60 bg-secondary/50 font-normal text-foreground/90"
							>
								{#if config.icon}
									{@const Icon = config.icon}
									<Icon aria-hidden="true" />
								{/if}
								{config.label}
							</Badge>
						{/each}
					</dd>
				</div>
			{/each}
		</dl>
	</Card.Content>

	<Card.Footer>
		<div class="flex flex-wrap gap-2">
			{#each project.buttons as button (button.href)}
				{@const Icon = PROJECT_LINK_ICON_MAP[button.icon]}
				<Button
					variant="outline"
					size="sm"
					href={button.href}
					target="_blank"
					rel="noopener noreferrer"
					class="h-auto min-h-8 max-w-full min-w-0 py-1.5 text-left font-mono text-xs font-normal !whitespace-normal text-muted-foreground hover:text-foreground"
				>
					<Icon aria-hidden="true" />
					{button.label}
				</Button>
			{/each}
		</div>
	</Card.Footer>
</Card.Root>
