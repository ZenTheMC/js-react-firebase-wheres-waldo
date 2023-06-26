import React from "react";
import { render, screen, waitFor } from "@testing-library/react";
import "@testing-library/jest-dom";
import Game from "../pages/Game";

// Mock Firebase
jest.mock("../firebase", () => ({
    db: {
        collection: () => ({
            get: () => Promise.resolve({
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
            orderBy: () => ({
                limit: () => ({
                    get: () => Promise.resolve({
                        docs: [
                            {
                                data: () => ({
                                    name: "Test",
                                    score: 100,
                                }),
                            },
                        ],
                    }),
                }),
            }),
        }),
    },
}));

// Silence console.error for this test file
beforeAll(() => {
    console.error = jest.fn();
});

describe("Game", () => {
    
    test("renders Game component", () => {
        render(<Game />);
    });

    test("renders child components", async () => {
        render(<Game />);
    
        await waitFor(() => {
            const photoDisplayElement = screen.getByTestId("photo-display");
            expect(photoDisplayElement).toBeInTheDocument();
        });

        const characterSelectionElements = screen.getAllByTestId("character-selection");
        expect(characterSelectionElements.length).toBeGreaterThan(0);
    
        const timerElement = screen.getByTestId("timer-display");
        expect(timerElement).toBeInTheDocument();
    
        const scoreBoardElements = screen.getAllByTestId("score-display");
        expect(scoreBoardElements.length).toBeGreaterThan(0);
    
        const targetingBoxElement = screen.getByTestId("targeting-box");
        expect(targetingBoxElement).toBeInTheDocument();

        const gameBoardElement = screen.getByTestId("game-board");
        expect(gameBoardElement).toBeInTheDocument();
        
    });
});