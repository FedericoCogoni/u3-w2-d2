import { Card } from "react-bootstrap"

const SingleBook = ({ changeSelectedBook, selectedBook, book }) => {
  return (
    <>
      <Card
        className="book-cover"
        onClick={() => changeSelectedBook(book.asin)}
        style={{
          border: selectedBook === book.asin ? "3px solid red" : "none",
        }}
      >
        <Card.Img className="cardImg" variant="top" src={book.img} />
        <Card.Body>
          <Card.Title className="cardTitle">{book.title}</Card.Title>
        </Card.Body>
      </Card>
    </>
  )
}

export default SingleBook
