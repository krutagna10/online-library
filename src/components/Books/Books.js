import Card from "../Card/Card";
import "./Books.css";

const Books = ({ books, onChangeBook, onDeleteBook }) => {
  return (
    <div className="books container">
      {books.map((book) => (
        <Card
          key={book.id}
          book={book}
          onChange={onChangeBook}
          onDelete={onDeleteBook}
        />
      ))}
    </div>
  );
};

export default Books;
