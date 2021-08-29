<script>
	import Event from './event.svelte';
	export let events;

	const eventMap = events.reduce((map, event) => {
		const dateKey = event.date.setLocale('no').toFormat('yyyy/MM/dd');
		if (!map[dateKey]) {
			map[dateKey] = [];
		}
		map[dateKey].push(event);
		return map;
	});
	console.log(eventMap);
</script>

{#each events as event}
	<Event {event} />
{/each}
