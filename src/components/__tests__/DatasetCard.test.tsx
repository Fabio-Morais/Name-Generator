import DatasetCard from '../DatasetCard';

import { render, screen } from '@testing-library/react';
import React from 'react';

test('renders DatasetCard component', () => {
  const name = 'test';
  render(<DatasetCard name={name} />);
  const nameElement = screen.getByTestId('name');
  expect(nameElement).toBeInTheDocument();
  expect(nameElement).toHaveTextContent(name);
});
