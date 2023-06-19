import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import PhotoDisplay from "../components/PhotoDisplay";
import { db } from '../firebase';

jest.mock("../firebase");

afterEach(() => {
  jest.clearAllMocks();
});

test("renders PhotoDisplay component with an image", () => {
    render(<PhotoDisplay />);
    const imgElement = screen.getByRole("img");
    expect(imgElement).toBeInTheDocument();
    expect(db.collection).toHaveBeenCalledWith("characters");
    expect(db.collection().get).toHaveBeenCalled();
});