import { render, screen, fireEvent, waitFor } from "@testing-library/react";
import "@testing-library/jest-dom";
import GameBoard from "../components/GameBoard";

jest.mock('firebase/firestore', () => ({
    getFirestore: () => ({}),
    collection: (db, collectionName) => ({
        collectionName
    }),
    getDocs: (collectionRef) => Promise.resolve({
        docs: [
            {
                data: () => ({
                    name: "Character",
                    location: {
                        x: 100,
                        y: 100,
                    },
                }),
            },
        ],
    }),
}));

describe("GameBoard", () => {

    test("renders GameBoard component", async () => {
        render(<GameBoard />);
        await waitFor(() => {
            const gameBoardElement = screen.getByTestId("game-board");
            expect(gameBoardElement).toBeInTheDocument();
        });
    });

    test("displays characters correctly", async () => {
        render(<GameBoard />);
        await waitFor(() => {
            const characterElement = screen.getByTestId("character");
            expect(characterElement).toBeInTheDocument();
        });
    });

    test("allows user to select a character", async () => {
        render(<GameBoard />);
        const characterElement = await screen.findByTestId("character");
        fireEvent.click(characterElement);
        const updatedScoreElement = await screen.findByText(/Current Score: 1/);
        expect(updatedScoreElement).toBeInTheDocument();
    });
});