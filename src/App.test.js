import { render, screen } from '@testing-library/react';
import App from './App';

test('renders web wire heading', () => {
  render(<App />);
  const linkElement = screen.getByText(/web wire/i);
  expect(linkElement).toBeInTheDocument();
});
