<script lang="ts">
	export let bottomPolygon: boolean = true;
	export let id: string = undefined;
	export let className: string = '';
</script>

<section {id} class="mt-8 w-full py-8 lg:mt-16 {className}">
	<div
		class="h-8 bg-green [clip-path:polygon(0%_2rem,0%_100%,100%_100%,100%_0%)] lg:h-16 lg:[clip-path:polygon(0%_4rem,0%_100%,100%_100%,100%_0%)]"
	/>
	<slot />
	{#if bottomPolygon}
		<div
			class="h-8 bg-green [clip-path:polygon(0%_0%,100%_2rem,100%_100%,100%_0%)] lg:h-16 lg:[clip-path:polygon(0%_0%,100%_4rem,100%_100%,100%_0%)]"
		/>
	{/if}
</section>
