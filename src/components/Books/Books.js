import Card from "../Card/Card";
import Container from "../UI/Container/Container";
import "./Books.css";

const Books = ({ books, onChangeBook, onDeleteBook }) => {
  return (
    <Container className="books grid">
      {books.map((book) => (
        <Card
          key={book.id}
          book={book}
          onChange={onChangeBook}
          onDelete={onDeleteBook}
        />
      ))}
    </Container>
  );
};

export default Books;
