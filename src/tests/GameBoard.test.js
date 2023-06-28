import React from 'react';
import { render, screen, fireEvent, waitFor } from "@testing-library/react";
import "@testing-library/jest-dom";
import GameBoard from "../components/GameBoard";

// Mock Firebase functions and objects
jest.mock('firebase/app', () => {
    return {
        __esModule: true,
        initializeApp: jest.fn(() => ({
            _getProvider: jest.fn(() => ({ initialize: jest.fn() })),
        })),
        getApps: jest.fn(() => []),
        getFirestore: jest.fn(() => ({
            collection: jest.fn(() => ({
                get: jest.fn(() => Promise.resolve({
                    docs: [
                        { data: jest.fn(() => ({ url: 'gs://path-to-your-image-1' })) },
                        { data: jest.fn(() => ({ url: 'gs://path-to-your-image-2' })) },
                        { data: jest.fn(() => ({ url: 'gs://path-to-your-image-3' })) },
                        { data: jest.fn(() => ({ url: 'gs://path-to-your-image-4' })) },
                        { data: jest.fn(() => ({ url: 'gs://path-to-your-image-5' })) },
                    ],
                })),
            })),
        })),
        getStorage: jest.fn(() => ({
            ref: jest.fn(() => ({
                getDownloadURL: jest.fn(() => Promise.resolve('https://path-to-your-image')),
            })),
        })),
    };
});

jest.mock('../components/Character', () => {
    return {
        __esModule: true,
        default: () => {
            return <img data-testid="character" alt="mocked character" />;
        },
    };
});

// Mock Background and Pokemon components
jest.mock('../components/Background', () => {
    return {
        __esModule: true,
        default: () => {
            return <div data-testid="background"></div>;
        },
    };
});

jest.mock('../components/Pokemon', () => {
    return {
        __esModule: true,
        default: () => {
            return <div data-testid="pokemon"></div>;
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
        await waitFor(() => {
            const updatedScoreElement = screen.getByText(/Current Score: 1/);
            expect(updatedScoreElement).toBeInTheDocument();
        });
    });
});