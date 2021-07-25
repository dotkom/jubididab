<script>
	export let text;
</script>

<div class="flex flex-col relative items-center overflow-hidden object-contain h-80vh">
	<img
		class="filter blur-sm l-0 transform-gpu scale-105 w-full object-cover h-80vh"
		src="troop.png"
		alt="no"
	/>
	<div class="overflow-hidden absolute w-full h-full flex justify-center items-center">
		<img class="h-20" src="Online_hvit_o.svg" alt="Online logo" />
		<h1 class="text-center text-7xl ml-4 text-white font-bold mb-2">{text}</h1>
	</div>
</div>
