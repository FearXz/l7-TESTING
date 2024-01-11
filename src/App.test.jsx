import { fireEvent, render, screen } from "@testing-library/react";
import App from "./App";
import Welcome from "./components/Welcome";
import fantasy from "./data/fantasy.json";
import AllTheBooks from "./components/AllTheBooks";

// 1)esiste il componente
describe("check welcome", () => {
  test("check welcome", () => {
    render(<Welcome />);
    const welcomeComponent = screen.getByTestId(/component-welcome/i);
    expect(welcomeComponent).toBeInTheDocument();
  });
});
// 2)echeck number of card
describe("check number of card", () => {
  test("heck number of card", () => {
    render(<AllTheBooks />);
    const allBooks = screen.queryAllByAltText("coverBook");

    expect(allBooks.length).toBe(fantasy.length);
  });
});
