<script context="module" lang="ts">
	export const prerender = true;
	import profilePicture from '$assets/johncheng.png';
	import profilePicture2x from '$assets/johncheng@2x.png';
	import Section from '$lib/Section.svelte';
	import ContactForm from '$lib/ContactForm.svelte';
	const contactRef: string = 'contact';
</script>

<svelte:head>
	<title>Koodikatu - Home</title>
</svelte:head>

<section class="px-4 mt-8 lg:mt-16 prose lg:prose-xl prose-h1:text-green">
	<h1>
		Let's go on an adventure <span class="underline">together</span> and build modern services you are
		proud to share
	</h1>
	<a
		href={`#${contactRef}`}
		rel="external"
		class="w-full lg:w-auto bg-salmon rounded-full p-2 lg:p-4 lg:px-8 text-lg font-bold no-underline"
		>Get in touch</a
	>
</section>
<Section>
	<div class="bg-green grid py-8 pb-16 lg:py-16 lg:pb-24 w-full justify-items-center">
		<div
			class="prose lg:prose-xl lg:max-w-5xl prose-headings:text-salmon text-beige lg:grid lg:grid-flow-col lg:place-content-between lg:gap-12"
		>
			<article class="px-4">
				<h2>01</h2>
				<article>
					<p>Every adventure has a hero, and that's <span>you</span>.</p>
					<p>
						I will help you <span
							class="underline decoration-orange decoration-4 underline-offset-4"
							>understand who you are</span
						>, what are your core values and how you can impact your users.
					</p>
				</article>
			</article>
			<article class="px-4">
				<h2>02</h2>
				<article>
					<p>Then we will design all the tools needed to help you thrive and reach your goals.</p>
					<p>
						<span>Together</span>, we will bring your community closer and
						<span class="underline decoration-orange decoration-4 underline-offset-4"
							>elevate your superpowers</span
						>.
					</p>
				</article>
			</article>
			<article class="px-4">
				<h2>03</h2>
				<article>
					<p>To fight the final boss, you will need to summon all your strength.</p>
					<p>
						I will build <span class="underline decoration-orange decoration-4 underline-offset-4"
							>reliable and robust</span
						> services that will facilitate your journey.
					</p>
				</article>
			</article>
		</div>
	</div>
</Section>
<section class="mt-8 lg:mt-16 px-4 prose lg:prose-xl text-green prose-headings:text-green">
	<img src={profilePicture} srcset="{profilePicture2x} 2x" alt="" class="w-[175px] h-[175px]" />
	<h3 class="uppercase">About me</h3>
	<h2 class="mt-0">Hey, I'm John</h2>
	<main>
		<p>
			If you ask me where I am from, the answer is France. But, my origins are in China and I
			studied in Switzerland and Finland.
		</p>
		<p>
			In my career so far, I have worked with great mentors at <a
				href="https://futurice.com"
				target="_blank">Futurice</a
			>
			where I honed my skills and learned what it means to build services that matter. I am particularly
			proud of having been part of the
			<a href="https://sanoma.fi" target="_blank" rel="noopener noreferrer">Sanoma</a> project where
			we worked with one of the biggest newspaper in Finland.
		</p>
	</main>
</section>
<ContactForm id={contactRef} />
