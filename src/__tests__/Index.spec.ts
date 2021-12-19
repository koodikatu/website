import '@testing-library/jest-dom';
import { render } from '@testing-library/svelte';
import Index from '../routes/index.svelte';

it('renders correctly', () => {
	const { container } = render(Index);
	expect(container).toMatchSnapshot();
});
