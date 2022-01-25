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
				if (!res.ok) {
					contactError = true;
				}
				goto('/message-sent');
			})
			.catch(() => {
				contactError = true;
			});
	};
</script>

<Section {id} className="pb-0" bottomPolygon={false}>
	<div class="grid w-full bg-green py-8 pb-16 lg:py-16 lg:pb-24">
		<div class="prose mx-auto px-4 text-beige prose-headings:text-beige lg:prose-xl">
			<article>
				<h2>Ready to bring your business to the next level?</h2>
				<p>
					You can reach us anytime via <a href="mailto:hello@koodikatu.com" class="text-salmon"
						>hello@koodikatu.com</a
					> or simply fill out the contact form.
				</p>
			</article>
			<form
				class="grid gap-4 rounded-md bg-beige p-4 text-green lg:p-8"
				on:submit|preventDefault={handleSubmit}
			>
				<label class="grid" for="name">
					Name:
					<input
						bind:value={name}
						type="text"
						required
						class="shadow-current rounded-md border-0 bg-salmon shadow-sm focus:ring focus:ring-orange"
					/>
				</label>
				<label class="grid" for="email">
					Email:
					<input
						bind:value={email}
						type="email"
						id="email"
						required
						class="shadow-current rounded-md border-0 bg-salmon shadow-sm focus:ring focus:ring-orange"
					/>
				</label>
				<label class="grid" for="message">
					Let me know how we can help you:
					<textarea
						bind:value={message}
						name="message"
						id="message"
						rows="10"
						spellcheck
						required
						class="shadow-current resize-none rounded-md border-0 bg-salmon shadow-sm focus:ring focus:ring-orange"
					/>
				</label>
				<input
					type="submit"
					class="shadow-current cursor-pointer justify-self-start rounded-md bg-salmon px-4 py-2 shadow-sm outline-0 focus:ring focus:ring-orange"
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
