import "./Card.css";

const Card = ({ book, onChange }) => {
  const handleIsReadChange = (event) => {
    console.log("hello");
    onChange({ ...book, isRead: event.target.checked });
  };

  return (
    <div className="card flow">
      <h2 className="card__title">{book.title}</h2>
      <p className="card__author">{book.author}</p>
      <p className="card__pages">Pages: {book.pages}</p>
      <div>
        <label htmlFor="card__input">Read : </label>
        <input
          id="card__input"
          type="checkbox"
          onChange={handleIsReadChange}
          checked={book.isRead}
        />
      </div>
      <button className="card__btn btn btn--red">Remove</button>
    </div>
  );
};

export default Card;
