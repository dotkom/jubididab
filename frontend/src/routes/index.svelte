<script>
	import Description from '../components/description.svelte';
	import Header from '../components/header.svelte';
	import Timeline from '../components/timeline.svelte';
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
	<div class="stripes-container">
		<div class="stripes stripes--peach">
			<span class="s5" />
			<span class="s6" />
		</div>
	</div>
	<div class="w-full flex flex-col items-center">
		<div class="max-w-screen-xl text-black flex items-center flex-col">
			<h1 class="text-5xl mb-5">Program.</h1>
			<Timeline />
		</div>
	</div>

	<img src="dranks.png" alt="yes" />
</main>

<style lang="scss">
	main {
		background: #ffffff;
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
		// position: relative;
		-webkit-transform: skewY(-4deg);
		transform: skewY(-4deg);
	}

	.header {
		// height: 900px;
	}

	$stripe-height: 50px;
	$content-columns: 12 !global;
	$gutter-columns: 4 !global;
	$gutter-column-width: 1fr !global;

	/* Colors */
	$stripes_peach: (
		'1': #edd89a,
		'2': #f2b705,
		'3': #f28705
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
		&:before {
			content: '';
			position: absolute;
			// top: -20%;
			bottom: -30%;
			left: 0;
			z-index: -1;
			background-color: #f6f9fc;
			width: 100%;
			height: 100%;
			-webkit-transform: skewY(-4deg);
			transform: skewY(-4deg);
		}
	}

	.stripes {
		display: grid;
		position: absolute;
		top: -195%;
		left: 0;
		right: 0;
		bottom: 0;
		width: 100%;
		height: 100%;
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
</style>
