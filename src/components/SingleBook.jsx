import { Card } from 'react-bootstrap'

const SingleBook = ({ changeSelectedBook, selectedBook, book }) => {
  return (
    <>
      <Card
        onClick={() => changeSelectedBook(book.asin)}
        style={{
          border: selectedBook === book.asin ? '3px solid red' : 'none',
        }}
      >
        <Card.Img variant="top" src={book.img} />
        <Card.Body>
          <Card.Title style={{ color: 'black' }}>{book.title}</Card.Title>
        </Card.Body>
      </Card>
    </>
  )
}

export default SingleBook
