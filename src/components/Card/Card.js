import "./Card.css";

const Card = ({ book }) => {
  return (
    <div className="card flow">
      <h2 className="card__title">{book.title}</h2>
      <p className="card__author">{book.author}</p>
      <p className="card__pages">Pages: {book.pages}</p>
      <div>
        <label htmlFor="card__input">Read : </label>
        <input id="card__input" type="checkbox" checked={book.isRead} />
      </div>
      <button className="card__btn btn btn--red">Remove</button>
    </div>
  );
};

export default Card;
