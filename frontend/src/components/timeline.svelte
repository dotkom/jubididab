<script>
	import Event from './event.svelte';
	export let events;
</script>

{#each events as event}
	<Event {event} />
{/each}
