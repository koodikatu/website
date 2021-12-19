import '@testing-library/jest-dom';
import { render } from '@testing-library/svelte';
import Header from '../lib/Header.svelte';

it('renders correctly', () => {
	const { container } = render(Header);
	expect(container).toMatchSnapshot();
});
