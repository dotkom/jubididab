<script>
	export let event;

	const isToday = (someDate) => {
		const today = new Date();
		someDate = new Date(someDate);

		return (
			someDate.getDate() == today.getDate() &&
			someDate.getMonth() == today.getMonth() &&
			someDate.getFullYear() == today.getFullYear()
		);
	};
</script>

<div
	tabindex="0"
	class={event.date < new Date() && !isToday(event.date) ? 'collapse' : 'collapse collapse-open'}
>
	<input type="checkbox" />
	<div class="collapse-title text-xl font-bold text-[#d8c7ff]">
		{event.title}
	</div>
	<div class="collapse-content text-[#d8c7ff]">
		<a href={event.link} class="text-[#d8c7ff]">Apply here</a>
		<p>{event.description}</p>
	</div>
</div>

<!-- <div class="border-double border-4 border-indigo-600 mb-10">
<img src={event.image} class="self-center" /> -->

<!-- <div class="col-span-3 text-left">
		<h3 class="text-2xl">{event.title}</h3>
		<p>{event.date}</p>
		<a href={event.link} class="text-blue-700">Apply here</a>
		<p>{event.description}</p>
	</div>
</div> -->
<style lang="css">
	.ring-container {
		position: relative;
	}

	.circle {
		width: 15px;
		height: 15px;
		background-color: #62bd19;
		border-radius: 50%;
		position: absolute;
		top: 23px;
		left: 23px;
	}

	.ringring {
		border: 3px solid #62bd19;
		-webkit-border-radius: 30px;
		height: 25px;
		width: 25px;
		position: absolute;
		left: 15px;
		top: 15px;
		-webkit-animation: pulsate 1s ease-out;
		-webkit-animation-iteration-count: infinite;
		opacity: 0;
	}
	@-webkit-keyframes pulsate {
		0% {
			-webkit-transform: scale(0.1, 0.1);
			opacity: 0;
		}
		50% {
			opacity: 1;
		}
		100% {
			-webkit-transform: scale(1.2, 1.2);
			opacity: 0;
		}
	}
</style>
