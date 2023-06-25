import React from "react";
import { render, screen } from "@testing-library/react";
import Leaderboards from "../pages/Leaderboards";
import "@testing-library/jest-dom";

// Mock Firebase
const mockGet = jest.fn();
jest.mock('../firebase', () => ({
    db: {
        collection: () => ({
            orderBy: () => ({
                orderBy: () => ({
                    limit: () => ({
                        get: mockGet,
                    }),
                }),
            }),
        }),
    },
}));

describe("Leaderboards", () => {
    beforeAll(() => {
        // Silence the console.error output for this test
        console.error = jest.fn();
    });

    test("renders the leaderboards page", () => {
        render(<Leaderboards />);
        const headerElement = screen.getByText(/leaderboards/i);
        expect(headerElement).toBeInTheDocument();
    });

    test("renders FetchTopScores component", async () => {
        mockGet.mockResolvedValueOnce({
            docs: [
                { data: () => ({ username: "user1", score: 10, timestamp: 123456789 }) },
                { data: () => ({ username: "user2", score: 8, timestamp: 123456789 }) },
            ],
        });
        render(<Leaderboards />);
        const loadingElement = await screen.findByText(/loading/i);
        expect(loadingElement).toBeInTheDocument();
    });

    test("displays scores once fetched", async () => {
        mockGet.mockResolvedValueOnce({
            docs: [
                { data: () => ({ username: "user1", score: 10, timestamp: 123456789 }) },
                { data: () => ({ username: "user2", score: 8, timestamp: 123456789 }) },
            ],
        });
        render(<Leaderboards />);
        const user1Score = await screen.findByText(/user1: 10/i);
        expect(user1Score).toBeInTheDocument();
        const user2Score = await screen.findByText(/user2: 8/i);
        expect(user2Score).toBeInTheDocument();
    });
});