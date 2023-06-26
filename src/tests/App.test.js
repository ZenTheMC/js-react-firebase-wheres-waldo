import { render, screen } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';
import '@testing-library/jest-dom';
import App from '../App';

describe('App', () => {
  test('renders App component', () => {
    render(
      <MemoryRouter>
        <App />
      </MemoryRouter>
    );
  });

  test('navigating to / renders Game component', () => {
    render(
      <MemoryRouter initialEntries={['/']}>
        <App />
      </MemoryRouter>
    );
    const gameElement = screen.getByTestId("game");
    expect(gameElement).toBeInTheDocument();
  });

  test('navigating to /leaderboards renders Leaderboards component', () => {
    render(
      <MemoryRouter initialEntries={['/leaderboards']}>
        <App />
      </MemoryRouter>
    );
    const leaderboardsElement = screen.getByTestId("leaderboards");
    expect(leaderboardsElement).toBeInTheDocument();
  });
});