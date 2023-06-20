import { render, screen, act, fireEvent } from "@testing-library/react";
import "@testing-library/jest-dom"
import Timer from "../components/Timer";

describe("Timer", () => {

    test("renders Timer component", () => {
        render(<Timer />);
        // Verify that the Timer component renders correctly
        const timerElement = screen.getByTestId("timer-display");
        expect(timerElement).toBeInTheDocument();
    });

    beforeEach(() => {
        jest.useFakeTimers();
    });

    test("timer starts correctly", () => {
        // Test that the timer starts correctly when the game starts
        render(<Timer />);
        act(() => {
            jest.advanceTimersByTime(1000);
        });
        
        const timerElement = screen.getByTestId("timer-display");
        // Check if the timer value has incremented
        expect(timerElement.textContent).not.toBe("Time: 0 seconds");
    }, 2000); // Add a 2-second timeout to the test

    test("timer stops correctly", () => {
        // Test that the timer stops correctly when the game ends
        render(<Timer />);
        // Advance the timers by 2 seconds
        act(() => {
            jest.advanceTimersByTime(2000);
        });

        // Get the timer element
        const timerElement = screen.getByTestId("timer-display");

        // Simulate the end of the game
        fireEvent.click(screen.getByText("End Game"));
        
        // Advance the timers by another 2 seconds
        act(() => {
            jest.advanceTimersByTime(2000);
        });

        // Check if the timer value has not incremented
        expect(timerElement.textContent).toBe("Time: 2 seconds");
    });

    test("timer resets correctly", () => {
        // Test that the timer resets correctly when a new game starts
        render(<Timer />);

        // Advance the timers by 2 seconds
        act(() => {
            jest.advanceTimersByTime(2000);
        });

        // Get the timer element
        const timerElement = screen.getByTestId("timer-display");
    
        // Simulate the end of the game
        fireEvent.click(screen.getByText("End Game"));

        // Check if the timer value has stopped incrementing
        expect(timerElement.textContent).toBe("Time: 2 seconds");

        // Simulate the start of a new game
        fireEvent.click(screen.getByText("Start Game"));

        // Check if the timer value has reset to it's initial value
        expect(timerElement.textContent).toBe("Time: 0 seconds");
    });
});