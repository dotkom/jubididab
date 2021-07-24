<script>
    import Event from "./event.svelte"

    let result = null

    async function getEvents () {
		const res = await fetch('https://sanity', {
			method: 'GET',

		})

        const json = await res.json()
		result = JSON.stringify(json)
    }
</script>

<Event/>