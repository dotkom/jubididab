<script>
	export let event;
</script>

<article class="grid grid-cols-4 mb-10">
	<img src={event.image} class="self-center" />
	<div class="col-span-3">
		<h3 class="text-2xl">{event.title}</h3>
		<p>{event.date}</p>
		<p>{event.description}</p>
		<a href={event.link} class="text-blue-700">Apply here</a>
	</div>
</article>
