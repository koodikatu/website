<script lang="ts">
	import Header from '$lib/Header.svelte';
	import '../app.css';

	const year = new Date().getFullYear();
</script>

<Header />

<main class="grid justify-items-center">
	<slot />
</main>

<footer class="prose m-auto p-4 text-green lg:prose-xl">
	&copy; {year} Koodikatu | All Rights Reserved
</footer>
