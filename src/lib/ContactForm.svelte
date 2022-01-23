<script lang="ts" context="module">
	import Section from './Section.svelte';
	import { goto } from '$app/navigation';
</script>

<script lang="ts">
	export let id: string;

	let contactError = false;
	let name: string, email: string, message: string;

	const handleSubmit = async () => {
		const data = { name, email, message };

		fetch('/api/contact', {
			method: 'POST',
			body: JSON.stringify(data),
			headers: { 'Content-Type': 'application/json' }
		})
			.then((res) => {
				if (res.ok) {
					goto('/message-sent');
				}

				contactError = true;
			})
			.catch(() => {
				contactError = true;
			});
	};
</script>

<Section {id} className="pb-0" bottomPolygon={false}>
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
						bind:value={name}
						type="text"
						required
						class="bg-salmon border-0 rounded-md shadow-current shadow-sm focus:ring focus:ring-orange"
					/>
				</label>
				<label class="grid" for="email">
					Email: (optional)
					<input
						bind:value={email}
						type="email"
						id="email"
						class="bg-salmon border-0 rounded-md shadow-current shadow-sm focus:ring focus:ring-orange"
					/>
				</label>
				<label class="grid" for="message">
					Message:
					<textarea
						bind:value={message}
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
