<script>
	import Timeline from '../timeline.svelte';
</script>

<section>
	<div class="flex flex-col relative items-center overflow-hidden">
		<img class="filter blur-sm l-0 transform-gpu scale-105" src="troop.png" alt="no" />
		<div class="overflow-hidden absolute w-full h-full flex justify-center items-center">
			<img class="h-20" src="Online_hvit_o.svg" alt="Online logo" />
			<h1 class="text-center text-7xl ml-4 text-white font-bold mb-2">35 ÅR!</h1>
		</div>
	</div>

	<div class="flex justify-center">
		<div class="w-3/5 max-w-screen-xl text-white text-black">
			<p class="mt-10 mb-10">
				Linjeforeningen Online ble grunnlagt høsten 1985 på Den allmennvitenskapelige høgskole på
				Lade. Tre tiår senere skal vi feire opprettelsen, og alle årene imellom. Jubileumskomiteen
				inviterer alle nåværende og tidligere Online-medlemmer til en ukelang feiring i Trondheim.
				Lørdag 12. november setter vi kronen på verket med jubileumsgalla. Velkommen!
			</p>

			<Timeline />
		</div>
	</div>

	<img src="dranks.png" alt="yes" />
</section>
