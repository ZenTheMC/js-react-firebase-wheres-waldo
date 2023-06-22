import { fireEvent, render, screen } from "@testing-library/react";
import "@testing-library/jest-dom"
import ScoreBoard from "../components/ScoreBoard";

describe("ScoreBoard", () => {
    let score, setScore;

    beforeEach(() => {
        score = 0;
        setScore = jest.fn();
    });

    test("renders ScoreBoard component", () => {
        render(<ScoreBoard score={score} incrementScore={setScore} startNewGame={setScore} />);
        // Verify that the ScoreBoard component renders correctly
        const scoreElement = screen.getByTestId("score-display");
        expect(scoreElement).toBeInTheDocument();
    });

    test("score increments correctly", () => {
        // Test that the score increments correctly when a character is identified
        render(<ScoreBoard score={score} incrementScore={setScore} startNewGame={setScore} />);
        const incrementButton = screen.getByTestId("increment-score");
        // Simulate finding a character
        fireEvent.click(incrementButton);
        // Check if the incrementScore function has been called
        expect(setScore).toHaveBeenCalled();
    });

    test("score resets correctly", () => {
        // Test that the score resets correctly when a new game starts
        render(<ScoreBoard score={score} incrementScore={setScore} startNewGame={setScore} />);
        const startNewGameButton = screen.getByTestId("start-new-game");
        // Simulate the start of the game
        fireEvent.click(startNewGameButton);
        // Check if the startNewGame function has been called
        expect(setScore).toHaveBeenCalled();
    });
});