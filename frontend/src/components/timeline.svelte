<script>
	import Event from './event.svelte';
	const fetchEvent = (async () => {
		const res = await fetch('https://retoolapi.dev/A3MXcI/events');
		return await res.json();
	})();
</script>

{#await fetchEvent}
	<p>...waiting</p>
{:then events}
	{#each events.slice(0, 6) as event}
		{console.log(event)}
		<Event {event} />
	{/each}
{:catch error}
	<pre>{error}</pre>
{/await}
