import React from "react";
import { render, screen } from "@testing-library/react";
import FetchTopScores from "../components/FetchTopScores";
import "@testing-library/jest-dom";

const mockGet = jest.fn();

jest.mock("../firebase", () => ({
    db: {
        collection: () => ({
            orderBy: () => ({
                limit: () => ({
                    get: mockGet,
                }),
            }),
        }),
    },
}));

describe("FetchTopScores", () => {
    test("renders with loading indicator", () => {
        render(<FetchTopScores />);
        const loadingElement = screen.getByText(/loading/i);
        expect(loadingElement).toBeInTheDocument();
    });

    test("fetches and displays the top scores", async () => {
        mockGet.mockResolvedValueOnce(Promise.resolve({
            docs: [
                { data: () => ({ username: "user1", score: 10 }) },
                { data: () => ({ username: "user2", score: 8 }) },
            ],
        }));

        render(<FetchTopScores />);

        const leaderboardElement = await screen.findByText(/leaderboard/i);
        expect(leaderboardElement).toBeInTheDocument();

        const user1Score = await screen.findByText(/user1: 10/i);
        expect(user1Score).toBeInTheDocument();

        const user2Score = await screen.findByText(/user2: 8/i);
        expect(user2Score).toBeInTheDocument();
    });

    test("handles errors gracefully", async () => {
        mockGet.mockRejectedValueOnce(Promise.reject(new Error("An error occurred")));

        console.error = jest.fn(); // Silence the console.error output for this test

        render(<FetchTopScores />);

        const errorElement = await screen.findByText(/failed to fetch scores/i);
        expect(errorElement).toBeInTheDocument();
    });
});