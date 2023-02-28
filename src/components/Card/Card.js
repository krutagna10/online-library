import Button from "../UI/Button/Button";
import "./Card.css";
import React, { useState } from "react";

const Card = ({ book, onChange, onDelete }) => {
  const [isEditing, setIsEditing] = useState(false);

  const handleDelete = () => {
    onDelete(book.id);
  };

  const handleTitleChange = (event) => {
    onChange({ ...book, title: event.target.value });
  };

  const handleAuthorChange = (event) => {
    onChange({ ...book, author: event.target.value });
  };

  const handlePagesChange = (event) => {
    onChange({ ...book, pages: event.target.value });
  };

  const handleIsReadChange = (event) => {
    onChange({ ...book, isRead: event.target.checked });
  };

  const handleClick = () => {
    setIsEditing((prevIsEditing) => !prevIsEditing);
  };

  const content = isEditing ? (
    <React.Fragment>
      <input type="text" value={book.title} onChange={handleTitleChange} />
      <input type="text" value={book.author} onChange={handleAuthorChange} />
      <input type="text" value={book.pages} onChange={handlePagesChange} />
    </React.Fragment>
  ) : (
    <React.Fragment>
      <h2 className="card__title">{book.title}</h2>
      <p className="card__author">{book.author}</p>
      <p className="card__pages">Pages: {book.pages}</p>
    </React.Fragment>
  );

  return (
    <div className="card grid grid--gap">
      {content}
      <div>
        <label htmlFor="card__input">Read : </label>
        <input
          type="checkbox"
          onChange={handleIsReadChange}
          checked={book.isRead}
        />
      </div>
      <Button className="card__btn btn--yellow" onClick={handleClick}>
        {isEditing ? "Save" : "Edit"}
      </Button>
      <Button className="card__btn btn--red" onClick={handleDelete}>
        Remove
      </Button>
    </div>
  );
};

export default Card;
