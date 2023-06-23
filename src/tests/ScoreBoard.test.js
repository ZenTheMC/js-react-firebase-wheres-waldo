import { fireEvent, render, screen, waitFor } from "@testing-library/react";
import "@testing-library/jest-dom"
import ScoreBoard from "../components/ScoreBoard";
import * as firebase from '../firebase';

jest.mock('../firebase', () => ({
    addScore: jest.fn(() => Promise.resolve()),
}));

describe("ScoreBoard", () => {
    let score, setScore, username;

    beforeEach(() => {
        score = 0;
        setScore = jest.fn();
        username = 'testUser';
    });

    test("renders ScoreBoard component", () => {
        render(<ScoreBoard score={score} incrementScore={setScore} startNewGame={setScore} username={username} />);
        // Verify that the ScoreBoard component renders correctly
        const scoreElement = screen.getByTestId("score-display");
        expect(scoreElement).toBeInTheDocument();
    });

    test("score increments correctly", () => {
        // Test that the score increments correctly when a character is identified
        render(<ScoreBoard score={score} incrementScore={setScore} startNewGame={setScore} username={username} />);
        const incrementButton = screen.getByTestId("increment-score");
        // Simulate finding a character
        fireEvent.click(incrementButton);
        // Check if the incrementScore function has been called
        expect(setScore).toHaveBeenCalled();
    });

    test("score resets correctly", async () => {
        // Test that the score resets correctly when a new game starts
        render(<ScoreBoard score={score} incrementScore={setScore} startNewGame={setScore} username={username} />);
        const startNewGameButton = screen.getByTestId("start-new-game");
        // Simulate the start of the game
        fireEvent.click(startNewGameButton);
        // Wait for the promise returned by startNewGame to resolve
        await waitFor(() => expect(firebase.addScore).toHaveBeenCalledWith(username, score));
        // Check if the startNewGame function has been called
        expect(setScore).toHaveBeenCalled();
    });
});