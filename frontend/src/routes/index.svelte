<script context="module">
	import { DateTime } from 'luxon';
	export async function load({ fetch }) {
		const data = await fetch('https://retoolapi.dev/A3MXcI/events');
		const json = await data.json();
		const events = json.map((event) => ({
			...event,
			date: DateTime.fromJSDate(new Date(event.date))
		}));
		events.sort((event1, event2) => event1.date - event2.date);
		return {
			props: { events }
		};
	}
</script>

<script>
	import Description from '../components/description.svelte';
	import Header from '../components/header.svelte';
	import Timeline from '../components/timeline.svelte';

	export let events;
</script>

<main>
	<Header text="35 ÅR" />
	<div class="content-container">
		<Description />
		<div class="event-container">
			<h1 class="text-5xl mb-5">Program.</h1>
			<Timeline {events} />
		</div>
	</div>
	<img src="dranks.png" alt="yes" />
</main>

<style lang="postcss">
	.content-container {
		@apply w-full flex flex-col items-center bg-white;
	}
	.event-container {
		@apply max-w-screen-xl text-black;
	}
</style>
