<script>
	export let event;
	const norDate = event.date.setLocale('no');
	const fmtNorDate = norDate.toFormat('EEEE dd. LLLL');
	const capitalizedFmtDate = fmtNorDate.charAt(0).toUpperCase() + fmtNorDate.slice(1);
	const formatedTime = norDate.toFormat('HH:mm');
</script>

<article class="event">
	<div class="leftside_timeline">
		<div class="">
			<time datetime={event.date}>{capitalizedFmtDate}</time>
			<time>{formatedTime}</time>
		</div>
		<div class="h-full relative">
			<div class="circle" />
			<div class="timeline_line" />
		</div>
	</div>
	<div class="col-span-3">
		<h3 class="text-2xl">{event.title}</h3>
		<p>{event.description}</p>
		<a href={event.link} class="text-blue-700">Apply here</a>
	</div>
</article>

<style lang="postcss">
	.event {
		@apply grid grid-cols-4 mb-10;
	}
	.leftside_timeline {
		@apply flex justify-between items-center mr-2;
	}
	.circle {
		width: 18px;
		height: 18px;
		background-color: black;
		border-radius: 50%;
		position: absolute;
		left: -8px;
		top: 9px;
	}
	.timeline_line {
		@apply h-full;
		border-right: 2px solid black;
	}
</style>
