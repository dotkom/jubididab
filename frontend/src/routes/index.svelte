<script context="module">
	import { client } from '../services/sanity';

	// @type {import("@sveltejs/kit").Load}

	export const load = async ({ fetch }) => {
		const query = `
		*[_type == "event"] {
			_createdAt,
			title,
			date,
			description,
			link
		}`;

		const res = await client.fetch(query);

		if (res) {
			return {
				props: {
					events: res
				}
			};
		}
	};
</script>

<script>
	import Description from '../components/description.svelte';
	import Header from '../components/header.svelte';
	import Timeline from '../components/timeline.svelte';

	export let events;
</script>

<main class="gradient-background">
	<Header text="35 ÅR" />
	<div class="wrapper">
		<Description />
	</div>

	<div class="stripes-container">
		<div class="stripes stripes--peach">
			<span class="s1" />
			<span class="s2" />
			<span class="s3" />
			<span class="s4" />
			<!-- <span class="s5" />
			<span class="s6" /> -->
		</div>
	</div>

	<div class="stripes-container bottom">
		<div class="stripes stripes--peach">
			<span class="s5" />
			<span class="s6" />
		</div>
	</div>

	<div class="timeline">
		<h1 class="text-3xl text-[#d8c7ff] font-semibold">Program.</h1>
		<Timeline {events} />
	</div>
</main>

<style lang="scss">
	h1 {
		margin-bottom: 3rem;
	}
	#popup {
		margin-top: -9rem;
	}

	.bottom-img {
		margin-top: -30rem;
		overflow-y: hidden;
		border: none;
		box-shadow: none;
		padding: 0px;
		outline: 0 !important;
		content: '';
	}

	.timeline {
		margin-top: -50rem;
		position: relative;
		padding-bottom: 60rem;
		max-width: 55rem;
		margin-left: 27%;
	}

	// #thank-you-section {
	// 	-webkit-transform: skewY(-4deg);
	// 	transform: skewY(-4deg);
	// 	margin-top: -23rem;
	// 	background-color: white;
	// 	height: 600px;
	// 	z-index: 20;
	// 	margin-bottom: -1200px;
	// }

	main {
		background-color: #5b2cbf;
		background-image: linear-gradient(43deg, #310273 0%, #5b2cbf 30%, #a74ebf 66%, #f2b705 100%);
	}

	.wrapper {
		// height: 100%;
		// height: 100%;
		// width: 100%;
		height: auto;
		position: relative;
		display: flex;
		justify-content: center;
		align-items: center;
		margin-top: -5%;
		z-index: 1;
		// position: relative;
		-webkit-transform: skewY(-4deg);
		transform: skewY(-4deg);
	}

	.program-container {
		margin-top: -80rem;
		padding-top: 25rem;
		background-color: transparent;
	}

	$stripe-height: 50px;
	$content-columns: 12 !global;
	$gutter-columns: 4 !global;
	$gutter-column-width: 1fr !global;

	/* Colors */
	$stripes_peach: (
		'1': #f9b759,
		'2': #510aa8,
		'3': #310373
	);

	@mixin stripesBG($color) {
		background-image: linear-gradient(
			$color,
			mix($color, #fff, 80) 10%,
			mix($color, #fff, 24) 38%,
			mix($color, #fff, 12) 48%,
			mix($color, #fff, 4) 62%
		);
	}

	.stripes-container {
		display: flex;
		flex-direction: column;
		align-items: center;
		position: relative;
		min-height: 500px;
		height: 100%;
		// &:before {
		// 	content: '';
		// 	position: absolute;
		// 	// top: -20%;
		// 	// bottom: -30%;
		// 	left: 0;
		// 	z-index: 1;
		// 	// background-color: #f6f9fc;
		// 	width: 100%;
		// 	height: 100%;
		// 	-webkit-transform: skewY(-4deg);
		// 	transform: skewY(-4deg);
		// }
	}

	.bottom {
		// margin-bottom: -60rem;
	}

	.stripes {
		display: grid;
		position: absolute;
		top: -190%;
		left: 0;
		right: 0;
		bottom: 0;
		width: 100%;
		height: 100%;
		z-index: 1;
		// min-height: 90vh;
		transform: skewY(-4deg);
		transform-origin: 0;

		&--peach {
			$content-column-width: minmax(0, calc(1040px / #{$content-columns}));

			display: grid;
			align-content: end;
			justify-content: end;
			grid-template-rows: repeat(auto-fill, $stripe-height);
			grid-template-columns:
				[viewport-start] 1fr [left-gutter-start] repeat($gutter-columns, $gutter-column-width)
				[left-gutter-end content-start] repeat($content-columns, $content-column-width)
				[content-end right-gutter-start] repeat($gutter-columns, $gutter-column-width)
				[right-gutter-end] 1fr [viewport-end];

			.s1 {
				grid-row-start: -7;
				grid-column: 16 / viewport-end;
				background-color: map-get($stripes_peach, '1');
			}
			.s2 {
				grid-row-start: -6;
				grid-column: 17 / span 3;
				background-color: map-get($stripes_peach, '2');
			}
			.s3 {
				grid-row-start: -6;
				grid-column: 19 / span 5;
				background-color: map-get($stripes_peach, '3');
			}
			.s4 {
				grid-row-start: -8;
				grid-column: 14 / span 6;
				border: 2px solid #c5d5e8;
				border-bottom: none;
			}
			.s5 {
				grid-row-start: -3;
				grid-column: 2 / span 3;
				border: 2px solid #c5d5e8;
			}
			.s6 {
				grid-row-start: -2;
				grid-column: 3 / span 4;
				background-color: map-get($stripes-peach, '1');
			}
		}
		/* -------- End of peach stripes -------- */
	}

	/* -------- Timeline background -------- */

	* {
		padding: 0;
		margin: 0;
	}

	html,
	body {
		font-family: 'Montserrat Alternates', sans-serif;
	}

	#stripes {
		padding-top: 105px;
		padding-bottom: 820px;
		height: 230vh;
		background: linear-gradient(150deg, #310273 15%, #923baa 70%, #d98fee 94%);
		clip-path: polygon(100% 0, 100% 80%, 0 99%, 0 0);
		display: grid;
		grid-template-columns: repeat(12, 1fr);
		grid-template-rows: repeat(12, 1fr);
	}

	#stripes :nth-child(1) {
		grid-area: 1 / 1 / span 4 / span 2;
		background-color: #320374b9;
		clip-path: polygon(0 0, 100% 0%, 100% 60%, 0% 100%);
	}

	#stripes :nth-child(2) {
		grid-area: 1 / 3 / span 3 / span 2;
		background-color: #3a0778b4;
		clip-path: polygon(0 0, 100% 0%, 100% 74%, 0% 100%);
		transform: translateY(-30px);
	}

	#stripes :nth-child(3) {
		grid-area: 1 / 5 / span 2 / span 2;
		background-color: #3607707a;
		clip-path: polygon(0 0, 100% 0, 99% 5%, 0 70%);
	}

	#stripes :nth-child(4) {
		height: 100%;
		margin-top: 100px;
		grid-area: 3 / 11 / span 3 / span 2;
		clip-path: polygon(0 23%, 100% 0%, 100% 77%, 0% 100%);
		background-color: #7e3da3;
	}

	#stripes :nth-child(5) {
		height: 100%;
		margin-top: 250px;
		grid-area: 9 / 1 / span 5 / span 4;
		clip-path: polygon(0 23%, 100% 0%, 100% 80%, 0% 100%);
		transform: translateY(4px);
		background-color: #712897;
	}

	#stripes-container-timeline {
		top: -71rem;
		position: relative;
		padding-top: 20px;
	}
</style>
