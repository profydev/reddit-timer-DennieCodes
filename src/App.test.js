import React from 'react';
import { render } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';
import { screen } from '@testing-library/react';
import App from './App';
import Header from './components/Header';
import userEvent from '@testing-library/user-event';

// Common test elements in Setup
function setup() {
  return render(
    // <MemoryRouter>
    <App />
    // </MemoryRouter>
  );
}

// Header Testing
describe('Header', () => {
  test.each([{ a: 'Search' }, { a: 'How it works' }, { a: 'About' }])(
    '.add($a)',
    ({ a }) => {
      setup();

      // screen.debug();
      // const link = screen.getByRole('link', { name: `${a}` });
      // userEvent.click(link);

      expect(
        // screen.getByRole('heading', { name: `${expected}` })
        screen.getByRole('link', { name: `${a}` })
      ).toBeInTheDocument();
    }
  );
});
