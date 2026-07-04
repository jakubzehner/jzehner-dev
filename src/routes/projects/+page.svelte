<script lang="ts">
	import ProjectCard from '$lib/components/project/project-card.svelte';

	let { data } = $props();
</script>

<svelte:head>
	<title>Projects — Jakub Zehner</title>
	<meta
		name="description"
		content="Selected projects by Jakub Zehner — fullstack web applications, research work, and university projects."
	/>
</svelte:head>

<div class="pt-16 pb-24 sm:pt-24">
	<section aria-label="Projects introduction">
		<p class="font-mono text-sm text-muted-foreground">
			<span class="text-primary select-none">~ $</span> ls ~/projects
		</p>
		<h1 class="mt-5 text-3xl font-bold tracking-tight sm:text-4xl">Projects</h1>
		<p class="mt-4 max-w-xl leading-relaxed text-pretty text-muted-foreground">
			A selection of things I have designed and built — professional, academic, and research work.
			You can find more on
			<a
				href="https://github.com/jakubzehner"
				target="_blank"
				rel="noopener noreferrer"
				class="text-primary decoration-primary/40 underline-offset-4 hover:underline">GitHub</a
			>.
		</p>
	</section>

	<div class="mt-12 flex flex-col gap-5">
		{#each data.projects as project (project.title)}
			<ProjectCard {project} />
		{/each}
	</div>
</div>
