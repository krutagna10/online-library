import AddBook from "../AddBook/AddBook";
import Books from "../Books/Books";
import Backdrop from "../UI/Backdrop/Backdrop";
import Button from "../UI/Button/Button";
import data from "./data";
import { useEffect, useState } from "react";
import "./Library.css";

const Library = () => {
  const [books, setBooks] = useState(data);
  const [isFormVisible, setIsFormVisible] = useState(false);

  useEffect(() => {
    const handleEscape = (event) => {
      if (isFormVisible && event.key === "Escape") {
        setIsFormVisible(false);
      }
    };

    document.addEventListener("keydown", handleEscape);

    return () => {
      document.removeEventListener("keydown", handleEscape);
    };
  }, [isFormVisible]);

  const handleAddBook = ({ title, author, pages, isRead }) => {
    const newBook = {
      id: crypto.randomUUID(),
      title: title,
      author: author,
      pages: pages,
      isRead: isRead,
    };
    setBooks((prevBooks) => [...prevBooks, newBook]);

    setIsFormVisible(false);
  };

  const handleChangeBook = (editedBook) => {
    setBooks((prevBooks) => {
      const updatedBooks = prevBooks.map((book) => {
        return editedBook.id === book.id ? editedBook : book;
      });
      return updatedBooks;
    });
  };

  const handleDeleteBook = (deleteId) => {
    setBooks((prevBooks) => {
      const updatedBooks = prevBooks.filter((book) => deleteId !== book.id);
      return updatedBooks;
    });
  };

  const showForm = () => {
    setIsFormVisible(true);
  };

  const hideForm = () => {
    setIsFormVisible(false);
  };

  return (
    <section className="library-section">
      <div className="library">
        {isFormVisible && (
          <Backdrop className="library__backdrop" onClick={hideForm} />
        )}

        <Button className="library__btn btn--green" onClick={showForm}>
          Add Book
        </Button>

        {isFormVisible && (
          <AddBook onAddBook={handleAddBook} onClose={hideForm} />
        )}

        <Books
          books={books}
          onChangeBook={handleChangeBook}
          onDeleteBook={handleDeleteBook}
        />
      </div>
    </section>
  );
};

export default Library;
