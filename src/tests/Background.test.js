import React from 'react';
import { render, screen } from '@testing-library/react';
import Background from '../components/Background';

describe('Background', () => {
  test('renders Background component', () => {
    render(<Background />);
  });

  test('contains 10 images', () => {
    render(<Background />);
    const images = screen.getAllByRole('img');
    expect(images.length).toBe(10);
  });
});