<script context="module" lang="ts">
	export const prerender = true;
	import profilePicture from '$assets/johncheng.png';
	import profilePicture2x from '$assets/johncheng@2x.png';
	import Section from '$lib/Section.svelte';
	import ContactForm from '$lib/ContactForm.svelte';
	import Highlight from '$lib/Highlight.svelte';
	const contactRef: string = 'contact';
</script>

<svelte:head>
	<title>Koodikatu - Home</title>
</svelte:head>

<section class="prose mt-8 px-4 prose-h1:text-green lg:prose-xl lg:mt-16">
	<h1>
		Let's go on an adventure <span class="underline">together</span> and bring your ideas to life
	</h1>
	<a
		href={`#${contactRef}`}
		rel="external"
		class="w-full rounded-full bg-salmon p-2 text-lg font-bold no-underline lg:w-auto lg:p-4 lg:px-8"
		>Get in touch</a
	>
</section>
<Section>
	<div class="grid w-full justify-items-center bg-green py-8 pb-16 lg:py-16 lg:pb-24">
		<section class="prose px-4 text-beige prose-headings:text-salmon lg:prose-xl lg:max-w-6xl">
			<h2>A simple but amazing adventure.</h2>
			<p>
				Every story has a trigger that sparks off the following ventures. If you feel like
				technology can potentially improve your business, your adventure has already started and you
				are most probably looking for trustful partners to accompany you in your quest, and that's
				exactly how <Highlight>Koodikatu can help you!</Highlight>
			</p>
			<h3>Our story will go something like that:</h3>
			<div class="lg:grid lg:grid-flow-col lg:place-content-between lg:gap-8">
				<article>
					<h2>01</h2>
					<article>
						<p>Every adventure has a hero, and that's you.</p>
						<p>
							We will <Highlight>discuss who you are</Highlight>, what are your core values and how
							you impact your users.
						</p>
						<p>
							By understanding those, it will <Highlight>clarify the mission</Highlight>, what needs
							to be done, the current stage of <span class="italic">your story</span>.
						</p>
						<p>
							Every hero has their unique background, some start from nothing, others already have
							established processes but when the trigger happens they all evolve and improve.
							Similarly, we will <Highlight>bring you to the next level</Highlight>.
						</p>
					</article>
				</article>
				<article>
					<h2>02</h2>
					<article>
						<p>We can now start the quest!</p>
						<p>
							At this stage of the story, we know the mission and it is time to <Highlight
								>transform the hero</Highlight
							>.
						</p>
						<p>
							<span class="italic">You already have working solutions?</span> Let's leverage and enhance
							them.
						</p>
						<p>
							<span class="italic">Starting out?</span> Together, we will make a plan and determine the
							steps to reach our goals.
						</p>
						<p>
							Stories are unique, ever-changing adventures. Yours will be the same. We will have
							surprises, take critical decisions but Koodikatu will be there to <Highlight
								>support you</Highlight
							>.
						</p>
					</article>
				</article>
				<article>
					<h2>03</h2>
					<article>
						<p>We are now reaching the climax of our adventure!</p>
						<p>
							All the enhancements or fresh ideas will be brought to life by yours truly, Koodikatu.
						</p>
						<p>
							Whether you needed help to improve your solutions or make your ideas a reality,
							Koodikatu is here to <Highlight>elevate your business</Highlight> and provide the missing
							tools to go to the next level.
						</p>
						<p>
							Every story has a happy ending. You will be <Highlight
								>proud to share your freshly created services</Highlight
							> that are robust, reliable and using state-of-the-art technology.
						</p>
					</article>
				</article>
			</div>
		</section>
	</div>
</Section>
<section class="prose mt-8 px-4 text-green prose-headings:text-green lg:prose-xl lg:mt-16">
	<img
		src={profilePicture}
		srcset="{profilePicture2x} 2x"
		alt=""
		class="h-[175px] w-[175px] lg:h-52 lg:w-52"
	/>
	<h2 class="mt-0">Hey, I'm John</h2>
	<main>
		<p>
			If you ask me where I am from, the answer is France. But, my origins are in China and I
			studied in Switzerland and Finland.
		</p>
		<p>
			In my career so far, I have worked with great mentors at <a
				href="https://futurice.com"
				target="_blank"
				rel="noopener noreferrer">Futurice</a
			>
			where I honed my skills and learned what it means to build services that matter. I am particularly
			proud of having been part of the
			<a href="https://sanoma.fi" target="_blank" rel="noopener noreferrer">Sanoma</a> project where
			we worked with one of the biggest newspaper in Finland.
		</p>
	</main>
</section>
<ContactForm id={contactRef} />
