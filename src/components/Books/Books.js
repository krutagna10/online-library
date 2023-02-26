import Card from "../Card/Card";
import "./Books.css";

const Books = ({ books }) => {
  return (
    <div className="books container">
      {books.map((book) => (
        <Card key={book.id} book={book} />
      ))}
    </div>
  );
};

export default Books;
