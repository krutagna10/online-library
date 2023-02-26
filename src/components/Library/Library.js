import AddBook from "../AddBook/AddBook";
import Books from "../Books/Books";
import uuid from "react-uuid";
import data from "../AddBook/data";
import { useState } from "react";
import "./Library.css";

const Library = () => {
  const [books, setBooks] = useState(data);
  const [isFormVisible, setIsFormVisible] = useState(false);

  const handleAddBook = ({ title, author, pages, isRead }) => {
    const newBook = {
      id: uuid(),
      title: title,
      author: author,
      pages: pages,
      isRead: isRead,
    };
    setBooks((prevBooks) => [...prevBooks, newBook]);

    setIsFormVisible(false);
  };

  const handleChangeBook = (editedBook) => {
    console.log(editedBook);
    setBooks((prevBooks) => {
      const nextBooks = prevBooks.map((book) => {
        return editedBook.id === book.id ? editedBook : book;
      });
      return nextBooks;
    });
  };

  const handleClick = () => {
    setIsFormVisible(true);
  };

  return (
    <section className="library-section">
      <div className="library">
        <button className="library__btn btn btn--green" onClick={handleClick}>
          Add Book
        </button>

        {isFormVisible && <AddBook onAddBook={handleAddBook} />}

        <Books books={books} onChangeBook={handleChangeBook} />
      </div>
    </section>
  );
};

export default Library;
