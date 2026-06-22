// src/App.test.js
import { render, screen } from '@testing-library/react';
import App from './App';

test('renders TrustHash title', () => {
    render(<App />);
    const titleElement = screen.getByText(/TrustHash/i);
    expect(titleElement).toBeInTheDocument();
});
