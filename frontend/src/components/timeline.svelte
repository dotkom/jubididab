<script>
	import Event from './event.svelte';

	export let events;

	const isToday = (someDate) => {
		const today = new Date();
		someDate = new Date(someDate);

		return (
			someDate.getDate() == today.getDate() &&
			someDate.getMonth() == today.getMonth() &&
			someDate.getFullYear() == today.getFullYear()
		);
	};

	var options = {
		weekday: 'long',
		month: 'long',
		day: 'numeric',
		hour: 'numeric',
		minute: 'numeric'
	};
</script>

<ol class="relative border-l border-gray-200 dark:border-gray-700">
	{#each events.slice(0, 6) as event}
		<li class="mb-10 ml-4 -left-1.5">
			{#if isToday(event.date)}
				<div
					class="animate-ping absolute w-4 h-4 bg-green-300 rounded-full -left-2 border border-green dark:border-green-900 dark:bg-green-700"
				/>
				<div
					class="absolute w-4 h-4 bg-green-300 rounded-full -left-2 border border-green dark:border-green-900 dark:bg-green-700"
				/>
			{:else}
				<div
					class="absolute w-3 h-3 bg-gray-200 rounded-full -left-1.5 border border-white dark:border-gray-900 dark:bg-gray-700"
				/>
			{/if}

			<div
				class="absolute -w-5 -h-5 -ml-60 -mt-1.5"
				style="width: 200px; float: right; text-align: right"
			>
				<p class="text-[#d8c7ff]">
					{new Date(event.date).toLocaleDateString('no-NO', options)}
				</p>
			</div>

			<Event {event} />
		</li>
	{/each}
</ol>
