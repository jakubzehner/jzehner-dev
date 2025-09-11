<script lang="ts">
	import '../app.css';
	import * as NavigationMenu from '$lib/components/ui/navigation-menu/index.js';
	import { navigationMenuTriggerStyle } from '$lib/components/ui/navigation-menu/navigation-menu-trigger.svelte';

	let { children } = $props();

	const siteTitle = 'Jakub Zehner';
	const siteDescription = 'Personal website of Jakub Zehner, Software Engineer.';
	const siteUrl = 'https://jzehner.dev';
</script>

<svelte:head>
	<title>{siteTitle}</title>
	<meta name="description" content={siteDescription} />
	<meta name="author" content="Jakub Zehner" />
	<meta
		name="keywords"
		content="software engineer, jakub zehner, programming, portfolio, github, linkedin"
	/>
	<meta name="viewport" content="width=device-width, initial-scale=1" />

	<link rel="canonical" href="https://www.jzehner.dev" />

	<link rel="icon" type="image/svg+xml" href="/favicon.svg" />
	<link rel="icon" type="image/png" sizes="180x180" href="/favicon-180.png" />
	<link rel="icon" type="image/png" sizes="64x64" href="/favicon-64.png" />
	<link rel="icon" type="image/png" sizes="48x48" href="/favicon-48.png" />
	<link rel="icon" type="image/png" sizes="32x32" href="/favicon-32.png" />
	<link rel="icon" type="image/png" sizes="16x16" href="/favicon-16.png" />
	<link rel="apple-touch-icon" sizes="180x180" href="/favicon-180.png" />
	<link rel="shortcut icon" href="/favicon.ico" />

	<meta property="og:title" content={siteTitle} />
	<meta property="og:description" content={siteDescription} />
	<meta property="og:type" content="website" />
	<meta property="og:url" content={siteUrl} />
	<meta property="og:image" content={`${siteUrl}/og-image.png`} />

	<meta name="twitter:card" content="summary_large_image" />
	<meta name="twitter:title" content={siteTitle} />
	<meta name="twitter:description" content={siteDescription} />
	<meta name="twitter:image" content={`${siteUrl}/og-image.png`} />

	<script type="application/ld+json">
	{`
		{
		"@context": "https://schema.org",
		"@type": "Person",
		"name": "Jakub Zehner",
		"jobTitle": "Software Engineer",
		"url": "${siteUrl}",
		"sameAs": [
			"https://github.com/jakubzehner",
			"https://www.linkedin.com/in/jakub-zehner"
		]
		}
	`}
	</script>
</svelte:head>

<div class="flex h-screen flex-col">
	<div class="flex justify-center">
		<NavigationMenu.Root>
			<NavigationMenu.List class="flex gap-x-12 p-6">
				<NavigationMenu.Item>
					<NavigationMenu.Link>
						{#snippet child()}
							<a href="/" class={navigationMenuTriggerStyle()}>About</a>
						{/snippet}
					</NavigationMenu.Link>
				</NavigationMenu.Item>
				<NavigationMenu.Item>
					<NavigationMenu.Link>
						{#snippet child()}
							<a href="/projects" class={navigationMenuTriggerStyle()}>Projects</a>
						{/snippet}
					</NavigationMenu.Link>
				</NavigationMenu.Item>
			</NavigationMenu.List>
		</NavigationMenu.Root>
	</div>
	<div class="flex min-h-0 flex-1">
		{@render children?.()}
	</div>
</div>
