import { h } from 'preact';
import { render, screen } from '@testing-library/preact';
import App from './App';

beforeAll(() => {
    render(<App />);
});

test('App renders', () => {
    expect(screen.getByText(/app/i)).toBeInTheDocument();
});
