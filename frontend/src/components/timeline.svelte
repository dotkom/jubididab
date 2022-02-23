<script>
	import Event from './event.svelte';

	export let events;

	events = events.sort(function (a, b) {
		return new Date(a.date) - new Date(b.date);
	});

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

<ol class="relative border-l border-gray-200 ">
	{#each events as event}
		<li class="mb-10 ml-4 -left-1.5 ">
			{#if isToday(event.date)}
				<div
					class="animate-ping absolute w-4 h-4 bg-green-300 rounded-full -left-2 border border-green"
				/>
				<div class="absolute w-4 h-4 bg-green-300 rounded-full -left-2 border border-green" />
			{:else}
				<div class="absolute w-3 h-3 bg-gray-200 rounded-full -left-1.5 border border-white" />
			{/if}
			<p class="date-responsive text-[#d8c7ff]">
				{new Date(event.date).toLocaleDateString('no-NO', options)}
			</p>

			<div
				class="absolute -w-5 -h-5 -ml-60 -mt-1.5"
				style="width: 200px; float: right; text-align: right"
			>
				<p class="date-normal text-[#d8c7ff]">
					{new Date(event.date).toLocaleDateString('no-NO', options)}
				</p>
			</div>

			<Event {event} />
		</li>
	{/each}
</ol>

<style lang="scss">
	ol {
		width: 80%;

		@media only screen and (max-width: 875px) {
			margin-left: -2rem;
		}
	}

	.date-normal {
		@media only screen and (max-width: 875px) {
			display: none;
			// visibility: hidden;
		}
	}

	.date-responsive {
		@media only screen and (min-width: 875px) {
			display: none;
			// visibility: hidden;
		}
	}
</style>
