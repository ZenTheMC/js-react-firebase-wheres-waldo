import React from "react";
import { render, screen, waitFor } from "@testing-library/react";
import "@testing-library/jest-dom";
import Game from "../pages/Game";

jest.mock('firebase/app', () => ({
    initializeApp: jest.fn(),
    storage: jest.fn(() => ({
        ref: jest.fn(() => ({
            child: jest.fn(() => ({
                getDownloadURL: jest.fn(() => Promise.resolve('url-to-your-image')),
            })),
        })),
    })),
}));

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

jest.mock('../components/GameBoard', () => {
    return {
        __esModule: true,
        default: () => {
            return <div data-testid="game-board"></div>;
        },
    };
});

describe("Game", () => {

    test("renders Game component", async () => {
        render(<Game />);
        await waitFor(() => {
            const gameElement = screen.getByTestId("game-board");
            expect(gameElement).toBeInTheDocument();
        });
    });

});