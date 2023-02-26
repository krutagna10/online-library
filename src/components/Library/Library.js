import AddBook from "../AddBook/AddBook";
import Books from "../Books/Books";
import uuid from "react-uuid";
import data from "../AddBook/data";
import { useState } from "react";
import "./Library.css";

const Library = () => {
  const [books, setBooks] = useState(data);
  const [isFormVisible, setIsFormVisible] = useState(false);

  const handleClick = () => {
    setIsFormVisible(true);
  };

  console.log(crypto.randomUUID());

  return (
    <section className="library-section">
      <div className="library">
        <button className="library__btn btn btn--green" onClick={handleClick}>
          Add Book
        </button>

        {isFormVisible && <AddBook />}

        <Books books={books} />
      </div>
    </section>
  );
};

export default Library;
