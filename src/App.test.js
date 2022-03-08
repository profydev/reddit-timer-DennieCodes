import React from 'react';
import { render, screen } from '@testing-library/react';
import App from './App';

// Common test elements in Setup
function setup() {
  return render(<App />);
}

// Header Testing
describe('Header', () => {
  test.each([
    { a: 'logo.svg', b: '/' },
    { a: 'How it works', b: '/#how-it-works' },
    { a: 'Search', b: '/search/javascript' },
    { a: 'About', b: '/#about' },
  ])('test that link is rendered', ({ a, b }) => {
    setup();

    // Test for presence of each link in the DOM
    expect(screen.getByRole('link', { name: `${a}` })).toBeInTheDocument();

    // Test for the corresponding href attribute
    expect(screen.getByRole('link', { name: `${a}` })).toHaveAttribute(
      'href',
      `${b}`
    );
  });
});
