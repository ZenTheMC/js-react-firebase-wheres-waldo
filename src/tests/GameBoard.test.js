import { render, screen, fireEvent, waitFor } from "@testing-library/react";
import "@testing-library/jest-dom";
import GameBoard from "../components/GameBoard";

// Mock Firebase functions and objects
jest.mock("../firebase", () => ({
    db: {},
    addScore: jest.fn(),
}));

jest.mock("firebase/firestore", () => ({
    collection: jest.fn(() => ({
        doc: jest.fn(() => ({
            get: jest.fn(() => Promise.resolve({
                exists: true,
                data: () => ({
                    name: "Character",
                    location: {
                        x: 100,
                        y: 100,
                    },
                }),
            })),
        })),
    })),
    getDocs: jest.fn(() => Promise.resolve({
        docs: [
            {
                data: () => ({
                    name: "Character",
                    location: {
                        x: 100,
                        y: 100,
                    },
                    url: "gs://path-to-your-image",
                }),
            },
        ],
    })),
}));

jest.mock("firebase/storage", () => ({
    getStorage: jest.fn(() => ({
        ref: jest.fn(() => ({
            getDownloadURL: jest.fn(() => Promise.resolve("url-to-your-image")),
        })),
    })),
}));

jest.mock('../components/Character', () => {
    return {
        __esModule: true,
        default: () => {
            return <div data-testid="character"></div>;
        },
    };
});

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