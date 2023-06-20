import { render, screen } from "@testing-library/react";
import React from "react";
import PhotoDisplay from "../components/PhotoDisplay";
import "@testing-library/jest-dom"

test("renders PhotoDisplay component with an image", () => {
  // Define mock data to pass as props
  const mockData = [
    {
      name: "Character 1",
      url: "http://example.com/character1.jpg"
    },
    {
      name: "Character 2",
      url: "http://example.com/character2.jpg"
    },
  ];

  // Render the component with the mock data
  render(<PhotoDisplay characters={mockData} />);

  // Check that the images are rendered correctly
  for (let character of mockData) {
  const imgElement = screen.getByAltText(character.name);
  expect(imgElement).toBeInTheDocument();
  expect(imgElement).toHaveAttribute("src", character.url);
  }
});