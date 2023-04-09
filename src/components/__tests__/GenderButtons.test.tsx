import GenderButtons from '../GenderButtons';

import { fireEvent, render, screen } from '@testing-library/react';
import React from 'react';

test('renders GenderButtons component', () => {
  const onClickHandler = jest.fn();
  render(<GenderButtons clickHandler={onClickHandler} />);
  const buttonMaleElement = screen.getByRole('button', { name: 'Male' });
  const buttonFemaleElement = screen.getByRole('button', { name: 'Female' });
  expect(buttonMaleElement).toBeInTheDocument();
  expect(buttonFemaleElement).toBeInTheDocument();
});

test('handlers are called with correct arguments', () => {
  const onClickHandler = jest.fn();
  render(<GenderButtons clickHandler={onClickHandler} />);
  const buttonMaleElement = screen.getByRole('button', { name: 'Male' });
  const buttonFemaleElement = screen.getByRole('button', { name: 'Female' });

  fireEvent.click(buttonMaleElement);
  fireEvent.click(buttonFemaleElement);

  expect(onClickHandler).toHaveBeenCalledTimes(2);
});
