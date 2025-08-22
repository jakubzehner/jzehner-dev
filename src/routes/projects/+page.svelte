<script lang="ts">
	import { ScrollArea } from '$lib/components/ui/scroll-area/index.js';
	import { projects } from '$lib/components/projects';
</script>

<div class="flex h-full w-full items-center justify-center">
	<ScrollArea class="h-full max-h-full">
		<div class="w-fit max-w-2xl space-y-4 p-4">
			{#each projects as Project}
				<Project />
			{/each}
		</div>
	</ScrollArea>
</div>
