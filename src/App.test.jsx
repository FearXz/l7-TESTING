import { fireEvent, render, screen } from "@testing-library/react";
import App from "./App";
import Welcome from "./components/Welcome";
import fantasy from "./data/fantasy.json";
import AllTheBooks from "./components/AllTheBooks";
import CommentArea from "./components/CommentArea";
import BookList from "./components/BookList";
import userEvent from "@testing-library/user-event";
import SingleComment from "./components/SingleComment";

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
// 3)esiste commentarea
describe("check welcome", () => {
  test("check welcome", () => {
    render(<CommentArea />);
    const CommentAreaComp = screen.getByTestId(/component-commentarea/i);
    expect(CommentAreaComp).toBeInTheDocument();
  });
});

// 4,5,6) check search function

describe("Filter behaviour", () => {
  test("returns 9  element if 'sword' is searched", async () => {
    render(<App />);
    const user = userEvent.setup();

    const inputField = screen.getByPlaceholderText(/Cerca un libro/i);

    //   fireEvent.change(inputField, { target: { value: "patricia" } });
    await user.type(inputField, "sword");

    const filteredListItems = await screen.findAllByTestId("bookcover");

    expect(filteredListItems).toHaveLength(9);
  });

  test("click change color 1", async () => {
    render(<App />);
    const listItems = await screen.findAllByTestId("bookcover");
    fireEvent.click(listItems[0]);
    const listItemsAfterClick = await screen.findAllByTestId("bookcover");

    expect(listItemsAfterClick[0]).toHaveClass("borderActive");
  });
  test("click change color 2", async () => {
    render(<App />);
    const listItems = await screen.findAllByTestId("bookcover");
    fireEvent.click(listItems[0]);
    const listItems2 = await screen.findAllByTestId("bookcover");
    fireEvent.click(listItems[1]);
    const listItems3 = await screen.findAllByTestId("bookcover");

    expect(listItems3[0]).not.toHaveClass("borderActive");
  });
});

// 7)check SingleComment non venga renderizzato all avvio
describe("check singleComment", () => {
  test("check singleComment", () => {
    render(<SingleComment />);
    const singleCommentComp = screen.getByTestId(/component-welcome/i);
    expect(singleCommentComp).toBeInTheDocument();
  });
});
