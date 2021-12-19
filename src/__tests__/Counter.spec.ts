import '@testing-library/jest-dom';
import { render, fireEvent } from '@testing-library/svelte';
import Counter from '../lib/Counter.svelte';

it('renders correctly', () => {
	const { container } = render(Counter);
	expect(container).toMatchSnapshot();
});

it('it works', async () => {
	const { getByTestId } = render(Counter);

	const increment = getByTestId('increment');
	const decrement = getByTestId('decrement');
	const counter = getByTestId('counter-value');

	expect(counter).toHaveTextContent('0');

	await fireEvent.click(increment);
	await fireEvent.click(increment);
	await fireEvent.click(increment);
	await fireEvent.click(decrement);

	expect(counter).toHaveTextContent('2');
});
