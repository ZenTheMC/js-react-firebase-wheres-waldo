import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import PhotoDisplay from "../components/PhotoDisplay";
jest.mock("../firebase");
import { firestore } from "../firebase";

test("renders PhotoDisplay component with an image", () => {
    render(<PhotoDisplay />);
    const imgElement = screen.getByRole("img");
    expect(imgElement).toBeInTheDocument();
});