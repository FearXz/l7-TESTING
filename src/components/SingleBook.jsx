import { Card } from "react-bootstrap";

const SingleBook = ({ changeSelectedBook, selectedBook, book }) => {
  return (
    <>
      <Card
        onClick={() => changeSelectedBook(book.asin)}
        data-testid="bookcover"
        className={selectedBook === book.asin ? "borderActive" : ""}
      >
        <Card.Img variant="top" src={book.img} alt="bookcover" />
        <Card.Body>
          <Card.Title style={{ color: "black" }}>{book.title}</Card.Title>
        </Card.Body>
      </Card>
    </>
  );
};

export default SingleBook;
