import { render, screen } from "@testing-library/react";
import CharacterSelection from "../components/CharacterSelection";
import "@testing-library/jest-dom";

test("renders CharacterSelection component", () => {
    render(<CharacterSelection />);
    const selectElement = screen.getByRole("combobox");
    expect(selectElement).toBeInTheDocument();
});