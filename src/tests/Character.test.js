import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom"
import Character from "../components/Character";

describe("Character", () => {
    test("renders Character component", () => {
        render(<Character />);
        const characterElement = screen.getByTestId("character");
        expect(characterElement).toBeInTheDocument();
    });
});