import "./AddBook.css";
import { useState } from "react";

const AddBook = ({ onAddBook, onCloseForm }) => {
  const [title, setTitle] = useState("");
  const [author, setAuthor] = useState("");
  const [pages, setPages] = useState("");
  const [isRead, setIsRead] = useState(false);

  const titleChangeHandler = (event) => {
    setTitle(event.target.value);
  };

  const authorChangeHandler = (event) => {
    setAuthor(event.target.value);
  };

  const pagesChangeHandler = (event) => {
    setPages(event.target.value);
  };

  const isReadChangeHandler = (event) => {
    setIsRead(event.target.checked);
  };

  const submitHandler = (event) => {
    event.preventDefault();
    onAddBook({
      title: title,
      author: author,
      pages: pages,
      isRead: isRead,
    });
  };

  return (
    <div className="form-wrapper">
      <form
        className="form grid grid--items-center grid--gap"
        onSubmit={submitHandler}
      >
        <h2 className="form__heading">Add new Book</h2>
        <div className="form__input-wrapper">
          <label htmlFor="form__input-title">
            <input
              className="form__input"
              onChange={titleChangeHandler}
              type="text"
              id="form__input-title"
              placeholder="Title"
              required
            />
          </label>
        </div>
        <div className="form__input-wrapper">
          <label htmlFor="form__input-author">
            <input
              className="form__input"
              onChange={authorChangeHandler}
              type="text"
              id="form__input-author"
              placeholder="Author"
              required
            />
          </label>
        </div>
        <div className="form__input-wrapper">
          <label htmlFor="form__input-pages">
            <input
              className="form__input"
              onChange={pagesChangeHandler}
              type="text"
              id="form__input-pages"
              placeholder="Pages"
              required
            />
          </label>
        </div>
        <div className="form__input-wrapper">
          <label htmlFor="form__input-read">Have you read it? {"  "}</label>
          <input
            className="book__input"
            type="checkbox"
            onChange={isReadChangeHandler}
            id="form__input-read"
          />
        </div>
        <button className="form__btn btn btn--green" type="submit">
          Add Book
        </button>
        <button className="form__btn-close" type="button" onClick={onCloseForm}>
          <ion-icon name="close-outline"></ion-icon>
        </button>
      </form>
    </div>
  );
};

export default AddBook;
