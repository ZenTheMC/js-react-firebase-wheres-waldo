import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom"
import Character from "../components/Character";

describe("Character", () => {
    test("renders Character component", () => {
        // Mock character data
        const mockCharacter = {
            url: "https://example.com/image.png",
            location: { x: 50, y: 50 }
        };

        // Render the Character component with the mock character data
        render(<Character character={mockCharacter} />);
        
        // Check if the character element is in the document
        const characterElement = screen.getByTestId("character");
        expect(characterElement).toBeInTheDocument();

        // Check if the character element has the correct image URL
        expect(characterElement).toHaveAttribute("src", mockCharacter.url);
    });
});