import { h } from 'preact';
import { render, screen } from '@testing-library/preact';
import App from './App';

test('App renders', () => {
    render(<App />);
    expect(screen.getByText(/app/i)).toBeInTheDocument();
});
