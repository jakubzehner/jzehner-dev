<script lang="ts">
	import '../app.css';
	import { page } from '$app/state';
	import Github from '@lucide/svelte/icons/github';
	import Linkedin from '@lucide/svelte/icons/linkedin';
	import Mail from '@lucide/svelte/icons/mail';
	import type { LayoutProps } from './$types';

	let { children, data }: LayoutProps = $props();

	const siteTitle = 'Jakub Zehner — Fullstack .NET/React Developer';
	const siteDescription =
		'Personal website of Jakub Zehner — a fullstack .NET/React developer from Poland, building web applications end to end.';
	const siteUrl = 'https://jzehner.dev';

	const navigationItems = [
		{ name: 'about', link: '/' },
		{ name: 'projects', link: '/projects' }
	];

	const socialLinks = $derived([
		{ label: 'GitHub', href: data.profile.github, icon: Github },
		{ label: 'LinkedIn', href: data.profile.linkedin, icon: Linkedin },
		{ label: 'Email', href: `mailto:${data.profile.email}`, icon: Mail }
	]);

	const isActive = (link: string) =>
		link === '/' ? page.url.pathname === '/' : page.url.pathname.startsWith(link);

	const year = new Date().getFullYear();
</script>

<svelte:head>
	<title>{siteTitle}</title>
	<meta name="description" content={siteDescription} />
	<meta name="author" content="Jakub Zehner" />
	<meta
		name="keywords"
		content="jakub zehner, software engineer, fullstack developer, .net, react, web applications, portfolio"
	/>

	<link rel="canonical" href={`${siteUrl}${page.url.pathname}`} />

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
	<meta property="og:url" content={`${siteUrl}${page.url.pathname}`} />
	<meta property="og:image" content={`${siteUrl}/og-image.png`} />

	<meta name="twitter:card" content="summary_large_image" />
	<meta name="twitter:title" content={siteTitle} />
	<meta name="twitter:description" content={siteDescription} />
	<meta name="twitter:image" content={`${siteUrl}/og-image.png`} />

	<script type="application/ld+json">
		{
			"@context": "https://schema.org",
			"@type": "Person",
			"name": "Jakub Zehner",
			"jobTitle": "Fullstack .NET/React Developer",
			"url": "https://jzehner.dev",
			"worksFor": { "@type": "Organization", "name": "Invest IT sp. z o.o." },
			"alumniOf": {
				"@type": "CollegeOrUniversity",
				"name": "Wrocław University of Science and Technology"
			},
			"sameAs": ["https://github.com/jakubzehner", "https://www.linkedin.com/in/jakub-zehner"]
		}
	</script>
</svelte:head>

<div class="relative flex min-h-dvh flex-col overflow-x-clip">
	<div
		class="bg-glow-top pointer-events-none absolute inset-x-0 top-0 h-140"
		aria-hidden="true"
	></div>
	<div
		class="bg-grid-faint pointer-events-none absolute inset-x-0 top-0 h-120"
		aria-hidden="true"
	></div>

	<header class="sticky top-0 z-50 border-b border-border/60 bg-background/80 backdrop-blur-md">
		<div class="mx-auto flex h-14 w-full max-w-3xl items-center justify-between px-6">
			<a href="/" class="group font-mono text-sm font-medium" aria-label="Home">
				<span class="text-muted-foreground">~/</span><span
					class="text-foreground transition-colors group-hover:text-primary">jzehner</span
				><span class="text-primary">.dev</span><span
					class="ml-px animate-caret-blink text-primary select-none">_</span
				>
			</a>

			<nav aria-label="Main navigation">
				<ul class="flex items-center gap-1 font-mono text-sm">
					{#each navigationItems as item (item.link)}
						{@const active = isActive(item.link)}
						<li>
							<a
								href={item.link}
								aria-current={active ? 'page' : undefined}
								class="rounded-md px-3 py-1.5 transition-colors
									{active ? 'text-foreground' : 'text-muted-foreground hover:text-foreground'}"
							>
								<span class={active ? 'text-primary' : 'text-muted-foreground/50'}>/</span
								>{item.name}
							</a>
						</li>
					{/each}
				</ul>
			</nav>
		</div>
	</header>

	<main class="relative mx-auto w-full max-w-3xl flex-1 px-6">
		{@render children?.()}
	</main>

	<footer class="relative border-t border-border/60">
		<div
			class="mx-auto flex w-full max-w-3xl flex-col gap-6 px-6 py-8 sm:flex-row sm:items-center sm:justify-between"
		>
			<div class="font-mono text-xs leading-relaxed text-muted-foreground">
				<p>© {year} Jakub Zehner</p>
				<p class="mt-1">
					Built with <a
						href="https://svelte.dev/docs/kit"
						target="_blank"
						rel="noopener noreferrer"
						class="underline decoration-border underline-offset-4 transition-colors hover:text-foreground"
						>SvelteKit</a
					>
					&
					<a
						href="https://tailwindcss.com"
						target="_blank"
						rel="noopener noreferrer"
						class="underline decoration-border underline-offset-4 transition-colors hover:text-foreground"
						>Tailwind CSS</a
					> · Deployed on Cloudflare
				</p>
			</div>

			<div class="flex items-center gap-1">
				{#each socialLinks as social (social.href)}
					<a
						href={social.href}
						target="_blank"
						rel="noopener noreferrer"
						aria-label={social.label}
						class="rounded-md p-2 text-muted-foreground transition-colors hover:bg-accent/60 hover:text-foreground"
					>
						<social.icon class="size-4" />
					</a>
				{/each}
			</div>
		</div>
	</footer>
</div>
