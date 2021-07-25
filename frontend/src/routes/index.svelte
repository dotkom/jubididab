<script context="module">
	export async function load({ fetch }) {
		const res = await fetch('https://retoolapi.dev/A3MXcI/events');

		if (res.ok) return { props: { events: await res.json() } };
		return {
			status: res.status,
			error: new Error()
		};
	}
</script>

<script>
	import Description from '../components/description.svelte';
	import Header from '../components/header.svelte';
	import Timeline from '../components/timeline.svelte';

	export let events;
</script>

<main class="gradient-background">
	<Header text="35 ÅR" />
	<div class="w-full flex flex-col items-center">
		<Description />
		<div class="max-w-screen-xl text-black flex items-center flex-col">
			<h1 class="text-5xl mb-5">Program.</h1>
			<Timeline {events} />
		</div>
	</div>

	<img src="dranks.png" alt="yes" />
</main>

<style>
</style>
