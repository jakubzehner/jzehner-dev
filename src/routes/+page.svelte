<script lang="ts">
	import ArrowUpRight from '@lucide/svelte/icons/arrow-up-right';
	import FileText from '@lucide/svelte/icons/file-text';
	import Github from '@lucide/svelte/icons/github';
	import Linkedin from '@lucide/svelte/icons/linkedin';
	import Mail from '@lucide/svelte/icons/mail';
	import MapPin from '@lucide/svelte/icons/map-pin';
	import { Badge } from '$lib/components/ui/badge/index.js';
	import { Button } from '$lib/components/ui/button/index.js';
	import { TECHNOLOGY_BADGE_MAP } from '$lib/mappings/project/mappings';
	import type { PageProps } from './$types';

	let { data }: PageProps = $props();
</script>

<svelte:head>
	<title>Jakub Zehner — Fullstack .NET/React Developer</title>
</svelte:head>

{#snippet sectionHeading(index: string, title: string)}
	<div class="flex items-center gap-4">
		<h2 class="shrink-0 font-mono text-sm tracking-[0.2em] uppercase">
			<span class="text-primary">{index}.</span>
			<span class="text-foreground">{title}</span>
		</h2>
		<div class="h-px flex-1 bg-border" aria-hidden="true"></div>
	</div>
{/snippet}

<div class="flex flex-col gap-20 pt-16 pb-24 sm:gap-24 sm:pt-24">
	<!-- Hero -->
	<section aria-label="Introduction">
		<p class="font-mono text-sm text-muted-foreground">
			<span class="text-primary select-none">~ $</span> whoami
		</p>
		<h1 class="mt-5 text-4xl font-bold tracking-tight text-balance sm:text-5xl">
			{data.profile.name}
		</h1>
		<p class="mt-3 font-mono text-lg text-primary">{data.profile.role}</p>
		<p class="mt-6 max-w-xl leading-relaxed text-pretty text-muted-foreground">
			{data.profile.intro}
		</p>
		<p class="mt-5 flex items-center gap-2 font-mono text-xs text-muted-foreground">
			<MapPin class="size-3.5 text-primary" aria-hidden="true" />
			{data.profile.location}
		</p>

		<div class="mt-8 flex flex-wrap gap-3">
			<Button
				href={data.profile.github}
				target="_blank"
				rel="noopener noreferrer"
				variant="outline"
				size="sm"
				class="font-mono"
			>
				<Github aria-hidden="true" /> GitHub
			</Button>
			<Button
				href={data.profile.linkedin}
				target="_blank"
				rel="noopener noreferrer"
				variant="outline"
				size="sm"
				class="font-mono"
			>
				<Linkedin aria-hidden="true" /> LinkedIn
			</Button>
			<Button href={`mailto:${data.profile.email}`} variant="outline" size="sm" class="font-mono">
				<Mail aria-hidden="true" /> Email
			</Button>
		</div>
	</section>

	<!-- Experience -->
	<section aria-labelledby="experience">
		{@render sectionHeading('01', 'experience')}
		<div class="mt-8 flex flex-col gap-10">
			{#each data.experience as entry (entry.company + entry.role)}
				<article class="grid gap-2 sm:grid-cols-[9rem_1fr] sm:gap-6">
					<div class="pt-0.5">
						<p class="font-mono text-xs leading-5 text-muted-foreground">{entry.period}</p>
						<p class="font-mono text-[11px] leading-5 text-muted-foreground/60">
							{entry.location}
						</p>
					</div>
					<div>
						<h3 class="font-medium">
							{entry.role}
							<span class="text-muted-foreground">·</span>
							{#if entry.companyUrl}
								<a
									href={entry.companyUrl}
									target="_blank"
									rel="noopener noreferrer"
									class="text-primary decoration-primary/40 underline-offset-4 hover:underline"
									>{entry.company}</a
								>
							{:else}
								{entry.company}
							{/if}
						</h3>
						<p class="mt-2 text-sm leading-relaxed text-pretty text-muted-foreground">
							{entry.summary}
						</p>
					</div>
				</article>
			{/each}
		</div>
	</section>

	<!-- Education -->
	<section aria-labelledby="education">
		{@render sectionHeading('02', 'education')}
		<div class="mt-8 flex flex-col gap-10">
			{#each data.education as entry (entry.degree)}
				<article class="grid gap-2 sm:grid-cols-[9rem_1fr] sm:gap-6">
					<p class="pt-0.5 font-mono text-xs leading-5 text-muted-foreground">{entry.period}</p>
					<div>
						<h3 class="font-medium">
							{entry.degree}, {entry.field}
						</h3>
						<p class="mt-1 text-sm text-muted-foreground">{entry.school}</p>
						{#if entry.grade}
							<p class="mt-1 font-mono text-xs text-muted-foreground/70">{entry.grade}</p>
						{/if}
						{#if entry.thesis}
							<a
								href={entry.thesis.href}
								target="_blank"
								rel="noopener noreferrer"
								class="group mt-3 flex max-w-fit items-start gap-2 text-sm text-muted-foreground transition-colors hover:text-foreground"
							>
								<FileText class="mt-0.5 size-3.5 shrink-0 text-primary" aria-hidden="true" />
								<span
									class="underline decoration-border underline-offset-4 group-hover:decoration-primary/60"
									>Thesis: {entry.thesis.label}</span
								>
							</a>
						{/if}
						{#if entry.highlights}
							<ul class="mt-3 space-y-2">
								{#each entry.highlights as highlight (highlight.label)}
									<li class="flex items-start gap-2 text-sm text-muted-foreground">
										<span class="text-primary select-none" aria-hidden="true">▹</span>
										{#if highlight.href}
											{@const external = !highlight.href.startsWith('/')}
											<a
												href={highlight.href}
												target={external ? '_blank' : undefined}
												rel={external ? 'noopener noreferrer' : undefined}
												class="underline decoration-border underline-offset-4 transition-colors hover:text-foreground hover:decoration-primary/60"
												>{highlight.label}</a
											>
										{:else}
											<span>{highlight.label}</span>
										{/if}
									</li>
								{/each}
							</ul>
						{/if}
					</div>
				</article>
			{/each}
		</div>
	</section>

	<!-- Technologies -->
	<section aria-labelledby="technologies">
		{@render sectionHeading('03', 'technologies')}
		<div class="mt-8 flex flex-col gap-5">
			{#each data.stack as group (group.category)}
				<div class="grid gap-2 sm:grid-cols-[9rem_1fr] sm:gap-6">
					<p class="pt-1 font-mono text-xs tracking-wider text-muted-foreground uppercase">
						{group.category}
					</p>
					<ul class="flex flex-wrap gap-1.5">
						{#each group.badges as badge (badge)}
							{@const config = TECHNOLOGY_BADGE_MAP[badge]}
							<li>
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
							</li>
						{/each}
					</ul>
				</div>
			{/each}
		</div>
	</section>

	<!-- Contact -->
	<section aria-labelledby="contact">
		{@render sectionHeading('04', 'contact')}
		<div class="mt-8 max-w-xl">
			<p class="leading-relaxed text-pretty text-muted-foreground">
				My inbox is always open — whether you have a question, an interesting project, or just want
				to talk about software. I'll do my best to get back to you.
			</p>
			<Button href={`mailto:${data.profile.email}`} class="mt-6 font-mono" size="lg">
				Say hello <ArrowUpRight aria-hidden="true" />
			</Button>
		</div>
	</section>
</div>
