<script>
	import Description from '../components/description.svelte';
	import Header from '../components/header.svelte';
	import Timeline from '../components/timeline.svelte';
</script>

<main class="gradient-background">
	<Header text="35 ÅR" />
	<div class="w-full flex flex-col items-center">
		<Description />
		<div class="max-w-screen-xl text-black flex items-center flex-col">
			<h1 class="text-5xl mb-5">Program.</h1>
			<Timeline />
		</div>
	</div>

	<img src="dranks.png" alt="yes" />
</main>

<style>
	main {
		background: #ca95d9;
	}
</style>
