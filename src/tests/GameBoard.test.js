import { render, screen, fireEvent, waitFor } from "@testing-library/react";
import "@testing-library/jest-dom"
import GameBoard from "../components/GameBoard";

describe("GameBoard", () => {

    test("renders GameBoard component", () => {
        render(<GameBoard />);
        // Verify that the GameBoard component renders correctly
        const gameBoardElement = screen.getByTestId("game-board");
        expect(gameBoardElement).toBeInTheDocument();
    });

    test("displays characters correctly", () => {
        // Test that the game board displays the correct characters
        render(<GameBoard />);
        const characterElement = screen.getByTestId("character");
        expect(characterElement).toBeInTheDocument();
    });

    jest.useFakeTimers();

    test("allows use to select a character", async () => {
        // Test that the game board allows the user to select a character
        render(<GameBoard />);
        const characterElement = screen.getByTestId("character");
        // Simulate selecting a character
        fireEvent.click(characterElement);
        // Check if the score has been updated
        const updatedScoreElement = await screen.findByText(/Current Score: 1/);
        expect(updatedScoreElement).toBeInTheDocument();
    });
});