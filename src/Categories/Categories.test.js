import React from 'react';
import { render } from '@testing-library/react';
import { BrowserRouter as Router } from 'react-router-dom';
import '@testing-library/jest-dom';
import Categories from './';

describe('Categories component', () => {
  it('renders categories correctly', () => {
    const { getByText } = render(
      <Router>
        <Categories />
      </Router>
    );
    const categories = [
        "Business",
        "Entertainment",
        "Health",
      ];
    categories.forEach((category) => {
      const link = getByText(category);
      expect(link).toBeInTheDocument();
      expect(link).toHaveAttribute('href', `/category/${category}`);
    });
  });
});
