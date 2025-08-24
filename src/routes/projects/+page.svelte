<script lang="ts">
	import { ScrollArea } from '$lib/components/ui/scroll-area/index.js';
	import { projects } from '$lib/components/projects';
</script>

<ScrollArea class="h-full max-h-full w-full">
	<div class="flex justify-center">
		<div class="w-fit max-w-2xl space-y-4 p-4">
			{#each projects as Project}
				<Project />
			{/each}
		</div>
	</div>
</ScrollArea>
