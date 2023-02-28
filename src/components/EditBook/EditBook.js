import React, { useState } from "react";
import "./EditBook.css";
import Button from "../UI/Button/Button";

const EditBook = ({
  title,
  author,
  pages,
  isRead,
  onSubmit,
  onIsReadChange,
}) => {
  const [enteredTitle, setEnteredTitle] = useState(title);
  const [enteredAuthor, setEnteredAuthor] = useState(author);
  const [enteredIsRead, setEnteredIsRead] = useState(isRead);
  const [enteredPages, setEnteredPages] = useState(pages);

  const handleEnteredTitleChange = (event) => {
    setEnteredTitle(event.target.value);
  };

  const handleEnteredAuthorChange = (event) => {
    setEnteredAuthor(event.target.value);
  };

  const handleEnteredIsReadChange = (event) => {
    setEnteredIsRead(event.target.checked);
    onIsReadChange(event.target.checked);
  };

  const handleEnteredPagesChange = (event) => {
    setEnteredPages(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    onSubmit(enteredTitle, enteredAuthor, enteredPages, enteredIsRead);
  };

  return (
    <form className="edit-form flow" onSubmit={handleSubmit}>
      <input
        type="text"
        value={enteredTitle}
        placeholder="Title"
        onChange={handleEnteredTitleChange}
        required
      />
      <input
        type="text"
        value={enteredAuthor}
        placeholder="Author"
        onChange={handleEnteredAuthorChange}
        required
      />
      <input
        type="text"
        value={enteredPages}
        placeholder="Pages"
        onChange={handleEnteredPagesChange}
        required
      />
      <div>
        <label htmlFor="card__input">Read : </label>
        <input
          type="checkbox"
          checked={enteredIsRead}
          onChange={handleEnteredIsReadChange}
        />
      </div>
      <Button type="submit" className="edit-form__btn btn--yellow">
        Save
      </Button>
    </form>
  );
};

export default EditBook;
