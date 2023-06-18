import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import TargetingBox from "../components/TargetingBox";

test("renders TargetingBox component with a select element", () => {
    render(<TargetingBox position={{ x: 100, y: 100 }} />);
    const selectElement = screen.getByRole("combobox");
    expect(selectElement).toBeInTheDocument();
});