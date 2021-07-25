<script>
	import Event from './event.svelte';
	export let events;
</script>

<section class="">
	{#each events as event}
		<Event {event} />
	{/each}
</section>
