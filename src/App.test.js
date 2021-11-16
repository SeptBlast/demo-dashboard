import { render, screen } from "@testing-library/react";
import App from "./App";

test("WelcomePage", () => {
    render(<App />);
    const linkElement = screen.getByText(/Hello/i);
    expect(linkElement).toBeInTheDocument();
});
