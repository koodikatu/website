<script context="module" lang="ts">
	export const prerender = true;
	import profilePicture from '$assets/johncheng.png';
</script>

<svelte:head>
	<title>Home</title>
</svelte:head>

<section class="px-4 mt-4 lg:mt-8 prose lg:prose-xl prose-h1:text-green">
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
<section class="mt-8 pt-8 w-full">
	<div
		class="bg-green h-8 lg:h-16 [clip-path:polygon(0%_2rem,0%_100%,100%_100%,100%_0%)] lg:[clip-path:polygon(0%_4rem,0%_100%,100%_100%,100%_0%)]"
	/>
	<div class="bg-green pb-8 w-full grid">
		<div class="prose lg:prose-xl prose-headings:text-beige text-beige mx-auto px-4">
			<article>
				<h2>Ready to bring your business to the next level?</h2>
				<p>You can reach me anytime via hello@koodikatu.com or simply fill out the contact form.</p>
			</article>
			<form class="bg-beige text-green grid rounded-md p-4 lg:p-8 gap-4">
				<label class="grid">
					Name:
					<input
						type="text"
						class="bg-salmon border-0 rounded-md shadow-current shadow-sm focus:ring focus:ring-orange"
					/>
				</label>
				<label class="grid">
					Email: (optional)
					<input
						type="email"
						id="email"
						class="bg-salmon border-0 rounded-md shadow-current shadow-sm focus:ring focus:ring-orange"
					/>
				</label>
				<label class="grid">
					Message:
					<textarea
						name="message"
						id="message"
						rows="10"
						spellcheck
						required
						class="bg-salmon border-0 rounded-md shadow-current shadow-sm resize-none focus:ring focus:ring-orange"
					/>
				</label>
				<div>
					<button
						type="submit"
						class="bg-salmon rounded-md shadow-current shadow-sm p-2 lg:p-4 lg:px-8"
						>Reach out 👋</button
					>
				</div>
			</form>
		</div>
	</div>
</section>
