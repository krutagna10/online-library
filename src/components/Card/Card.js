import "./Card.css";

const Card = ({ book, onChange, onDelete }) => {
  const handleIsReadChange = (event) => {
    onChange({ ...book, isRead: event.target.checked });
  };

  const handleDelete = () => {
    onDelete(book.id);
  };

  return (
    <div className="card flow">
      <h2 className="card__title">{book.title}</h2>
      <p className="card__author">{book.author}</p>
      <p className="card__pages">Pages: {book.pages}</p>
      <div>
        <label htmlFor="card__input">Read : </label>
        <input
          type="checkbox"
          onChange={handleIsReadChange}
          checked={book.isRead}
        />
      </div>
      <button className="btn btn--yellow">Edit</button>
      <button className="card__btn btn btn--red" onClick={handleDelete}>
        Remove
      </button>
    </div>
  );
};

export default Card;
