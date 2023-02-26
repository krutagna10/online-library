import Card from "../Card/Card";
import "./Books.css";

const Books = ({ books, onChangeBook }) => {
  return (
    <div className="books container">
      {books.map((book) => (
        <Card key={book.id} book={book} onChangeBook={onChangeBook} />
      ))}
    </div>
  );
};

export default Books;
