<script>
	import Header from '../components/header.svelte';
	import Timeline from '../components/timeline.svelte';
</script>

<main>
	<Header text="35 ÅR" />
	<div class="w-full  flex justify-center">
		<div class="max-w-screen-xl text-white text-black ">
			<p class="mt-10 mb-10">
				Linjeforeningen Online ble grunnlagt høsten 1985 på Den allmennvitenskapelige høgskole på
				Lade. Tre tiår senere skal vi feire opprettelsen, og alle årene imellom. Jubileumskomiteen
				inviterer alle nåværende og tidligere Online-medlemmer til en ukelang feiring i Trondheim.
				Lørdag 12. november setter vi kronen på verket med jubileumsgalla. Velkommen!
			</p>
			<h1 class="text-5xl mb-5">Program.</h1>
			<Timeline />
		</div>
	</div>

	<img src="dranks.png" alt="yes" />
</main>
