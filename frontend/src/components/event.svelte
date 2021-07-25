<script>
	export let event;
</script>

<article class="flex items-center mb-8">
	<p>{event.date}</p>

	<div class="flex items-center">
		<div alt="an event circle indication" class="dot-indicator mr-8" />
	</div>

	<div class="col-span-3">
		<h3 class="text-2xl">{event.title}</h3>
		<p>{event.description}</p>
		<a href={event.link} class="text-blue-700">Apply here</a>
	</div>
</article>

<style>
	.dot-indicator {
		width: 14px;
		height: 14px;
		border-radius: 50%;
		background-color: blue;
	}
</style>
