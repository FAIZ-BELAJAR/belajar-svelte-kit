<script lang="ts">
	import favicon from '#lib/assets/favicon.svg';
	import type { LayoutProps } from './$types';

	let { children, data }: LayoutProps = $props();
</script>

<svelte:head>
	<link rel="icon" href={favicon} />
</svelte:head>

<ul>
	<li>
		ini url nya: {data.url}
	</li>
	<li>
	<a href="/">Home</a>
	</li>
	<li >
	<a href="/counter">Counter</a>
	</li>
	<li >
	<a href="/profile/user">Profile</a>
	</li>
</ul>

{@render children()}
