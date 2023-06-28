import React from 'react';
import { render, screen } from '@testing-library/react';
import Pokemon from '../components/Pokemon';

describe('Pokemon', () => {
  test('renders Pokemon component', () => {
    render(<Pokemon />);
  });

  test('contains the expected number of Pokemon images', () => {
    render(<Pokemon />);
    const images = screen.getAllByRole('img');
    expect(images.length).toBe(1000); // This should match the numberOfPokemon constant in the Pokemon component
  });
});