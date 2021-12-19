<script context="module" lang="ts">
	export const prerender = true;
	import profilePicture from '$assets/johncheng.png';
</script>

<svelte:head>
	<title>Home</title>
</svelte:head>

<section class="px-4 prose lg:prose-xl prose-h1:text-green">
	<h1>Grow your business with a modern website you are proud to share</h1>
	<button class="w-full lg:w-auto bg-salmon rounded-full p-2 lg:p-4 lg:px-8 text-lg font-bold"
		>Get in touch</button
	>
</section>
<section class="mt-8 py-8 w-full">
	<div
		class="bg-green h-8 lg:h-16 [clip-path:polygon(0%_2rem,0%_100%,100%_100%,100%_0%)] lg:[clip-path:polygon(0%_4rem,0%_100%,100%_100%,100%_0%)]"
	/>
	<div class="bg-green grid pb-8 w-full justify-items-center">
		<div class="prose lg:prose-xl prose-headings:text-beige text-beige">
			<article class="px-4">
				<h2>01</h2>
				<article>
					Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has
					been the industry's standard dummy text ever since the 1500s, when an unknown printer took
					a galley of type and scrambled it to make a type specimen book.
				</article>
			</article>
			<article class="px-4">
				<h2>02</h2>
				<article>
					Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has
					been the industry's standard dummy text ever since the 1500s, when an unknown printer took
					a galley of type and scrambled it to make a type specimen book.
				</article>
			</article>
			<article class="px-4">
				<h2>03</h2>
				<article>
					Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has
					been the industry's standard dummy text ever since the 1500s, when an unknown printer took
					a galley of type and scrambled it to make a type specimen book.
				</article>
			</article>
		</div>
	</div>
	<div
		class="bg-green h-8 lg:h-16 [clip-path:polygon(0%_0%,100%_2rem,100%_100%,100%_0%)] lg:[clip-path:polygon(0%_0%,100%_4rem,100%_100%,100%_0%)]"
	/>
</section>
<section class="px-4 prose lg:prose-xl text-green prose-headings:text-green">
	<img src={profilePicture} alt="" />
	<h3 class="uppercase">About me</h3>
	<h2 class="mt-0">Hey, I'm John</h2>
	<main>
		Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been
		the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley
		of type and scrambled it to make a type specimen book.
	</main>
</section>
