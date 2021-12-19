<script lang="ts">
	import Header from '$lib/Header.svelte';
	import '../app.css';

	const year = new Date().getFullYear();
</script>

<Header />

<main>
	<slot />
</main>

<footer class="p-4">
	&copy; {year} Koodikatu | All Rights Reserved
</footer>
