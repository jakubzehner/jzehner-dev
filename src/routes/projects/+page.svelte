<script lang="ts">
	import { ScrollArea } from '$lib/components/ui/scroll-area/index.js';
	import { projects } from '$lib/components/projects';
</script>

<svelte:head>
	<title>Projects – Jakub Zehner</title>
</svelte:head>

<ScrollArea class="h-full max-h-full w-full">
	<div class="flex justify-center">
		<div class="w-full max-w-2xl space-y-4 p-4">
			{#each projects as Project}
				<Project />
			{/each}
		</div>
	</div>
</ScrollArea>
