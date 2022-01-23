<script lang="ts">
	import Header from '$lib/Header.svelte';
	import '../app.css';

	const year = new Date().getFullYear();
</script>

<Header />

<main class="grid justify-items-center">
	<slot />
</main>

<footer class="p-4 prose lg:prose-xl text-green m-auto">
	&copy; {year} Koodikatu | All Rights Reserved
</footer>
