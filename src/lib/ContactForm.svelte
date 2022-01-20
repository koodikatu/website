<script lang="ts" context="module">
	import Section from './Section.svelte';
	import { goto } from '$app/navigation';
</script>

<script lang="ts">
	export let id: string;
	let contactError = false;

	const handleSubmit = async (e: any) => {
		try {
			const response = await fetch('/api/contact', {
				method: 'POST',
				body: JSON.stringify({
					name: e.target.name.value,
					email: e.target.email.value,
					message: e.target.message.value
				}),
				headers: {
					'Content-Type': 'application/json'
				}
			});

			if (response.ok) {
				goto('/message-sent');
			}
		} catch (error) {
			contactError = true;
		}
	};
</script>

<Section {id} bottomPolygon={false}>
	<div class="bg-green py-8 pb-16 lg:py-16 lg:pb-24 w-full grid">
		<div class="prose lg:prose-xl prose-headings:text-beige text-beige mx-auto px-4">
			<article>
				<h2>Ready to bring your business to the next level?</h2>
				<p>
					You can reach me anytime via <a href="mailto:hello@koodikatu.com" class="text-salmon"
						>hello@koodikatu.com</a
					> or simply fill out the contact form.
				</p>
			</article>
			<form
				class="bg-beige text-green grid rounded-md p-4 lg:p-8 gap-4"
				on:submit|preventDefault={handleSubmit}
			>
				<label class="grid" for="name">
					Name:
					<input
						type="text"
						required
						class="bg-salmon border-0 rounded-md shadow-current shadow-sm focus:ring focus:ring-orange"
					/>
				</label>
				<label class="grid" for="email">
					Email: (optional)
					<input
						type="email"
						id="email"
						class="bg-salmon border-0 rounded-md shadow-current shadow-sm focus:ring focus:ring-orange"
					/>
				</label>
				<label class="grid" for="message">
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
				<input
					type="submit"
					class="bg-salmon rounded-md shadow-current shadow-sm px-4 py-2 justify-self-start outline-0 focus:ring focus:ring-orange cursor-pointer"
					value="Reach out 👋"
				/>
				{#if contactError}
					<section>
						Something went wrong while sending your message. Please, try again later.
					</section>
				{/if}
			</form>
		</div>
	</div>
</Section>
