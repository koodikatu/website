<script>
	const onSubmit = () => {
		return fetch('/api/env', { method: 'GET' })
			.then((res) => res.json())
			.then((json) => console.debug(json));
	};
</script>

<button on:click={onSubmit}> Click me </button>
