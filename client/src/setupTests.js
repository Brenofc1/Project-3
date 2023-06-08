import '@testing-library/jest-dom';
import { render, screen } from '@testing-library/react';

test('renders a component with expected text content', () => {
  render(<MyComponent />);

  expect(screen.getByTestId('my-element')).toHaveTextContent('Hello, World!');
});