import { render, screen, fireEvent, waitFor, act } from "@testing-library/react";
import "@testing-library/jest-dom"
import GameBoard from "../components/GameBoard";
// eslint-disable-next-line no-unused-vars
import { db } from "../firebase";

jest.mock("../firebase", () => {
    return {
        db: {
            collection: () => {
                return {
                    get: jest.fn().mockResolvedValue({
                        docs: [
                            { 
                                data: jest.fn().mockReturnValue({ name: "Character 1", location: { x: 1, y: 1 } }) 
                            }
                        ]
                    })
                }
            }
        }
    }
});

describe("GameBoard", () => {

    test("renders GameBoard component", async () => {
        // eslint-disable-next-line testing-library/no-unnecessary-act
        await act(async () => {
            render(<GameBoard />);
        });
        // Verify that the GameBoard component renders correctly
        const gameBoardElement = screen.getByTestId("game-board");
        expect(gameBoardElement).toBeInTheDocument();
    });

    test("displays characters correctly", async () => {
        // Test that the game board displays the correct characters
        render(<GameBoard />);
        await waitFor(() => {
            const characterElement = screen.getByTestId("character");
            expect(characterElement).toBeInTheDocument();
        });
    });

    jest.useFakeTimers();

    test("allows use to select a character", async () => {
        // Test that the game board allows the user to select a character
        render(<GameBoard />);
        const characterElement = await screen.findByTestId("character");
        // Simulate selecting a character
        fireEvent.click(characterElement);
        // Check if the score has been updated
        const updatedScoreElement = await screen.findByText(/Current Score: 1/);
        expect(updatedScoreElement).toBeInTheDocument();
    });
});