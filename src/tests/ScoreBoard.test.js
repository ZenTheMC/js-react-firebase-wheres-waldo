import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom"
import ScoreBoard from "../components/ScoreBoard";

describe("ScoreBoard", () => {

    test("renders ScoreBoard component", () => {
        render(<ScoreBoard />);
        // Verify that the ScoreBoard component renders correctly
    });

    test("score increments correctly", () => {
        // Test that the score increments correctly when a character is identified
    });

    test("score resets correctly", () => {
        // Test that the score resets correctly when a new game starts
    });
});