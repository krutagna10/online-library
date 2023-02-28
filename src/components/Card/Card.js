import Button from "../UI/Button/Button";
import EditBook from "../EditBook/EditBook";
import "./Card.css";
import React, { useState } from "react";

const Card = ({ book, onChange, onDelete }) => {
  const [isEditing, setIsEditing] = useState(false);

  const handleDelete = () => {
    onDelete(book.id);
  };

  const handleIsReadChange = (isRead) => {
    onChange({ ...book, isRead: isRead });
  };

  const showEditing = () => {
    setIsEditing(true);
  };

  const handleSubmit = (title, author, pages, isRead) => {
    onChange({
      ...book,
      title: title,
      author: author,
      pages: pages,
      isRead: isRead,
    });
    setIsEditing(false);
  };

  return (
    <div className="card grid grid--gap">
      {isEditing ? (
        <EditBook
          {...book}
          onSubmit={handleSubmit}
          onIsReadChange={handleIsReadChange}
        />
      ) : (
        <React.Fragment>
          <h2 className="card__title">{book.title}</h2>
          <p className="card__author">{book.author}</p>
          <p className="card__pages">Pages: {book.pages}</p>
          <div>
            <label htmlFor="card__input">Read : </label>
            <input
              type="checkbox"
              onChange={(event) => {
                handleIsReadChange(event.target.checked);
              }}
              checked={book.isRead}
            />
          </div>
          <Button className="card__btn btn--yellow" onClick={showEditing}>
            Edit
          </Button>
        </React.Fragment>
      )}
      <Button className="card__btn btn--red" onClick={handleDelete}>
        Remove
      </Button>
    </div>
  );
};

export default Card;
