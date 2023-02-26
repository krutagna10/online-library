import './BookCard.css';

const BookCard = (props) => {
    let readElement;

    const readToggleHandler = (event) => {
        const value = window.confirm('Are you sure you want to change read value?');

        if (value) {
            if (event.target.textContent === 'Read') {
                event.target.textContent = 'Not Read';
                event.target.className = 'btn btn--red';
            } else {
                event.target.textContent = 'Read';
                event.target.className = 'btn btn--green';
            }
        }
    };


    if (props.isRead) {
        readElement = (
            <button onClick={readToggleHandler} className='book__read-btn btn btn--green'>Read</button>
        )
    } else {
        readElement = (
            <button onClick={readToggleHandler} className='book__read-btn btn btn--red'>Not Read</button>
        )
    }

    const clickHandler = () => {
        const value = window.confirm('Are you sure you want to remove to book?');
        if (value) {
            props.onRemove(props.title);
        }
    }

    const editHandler = () => {
        props.onEdit(props.title);
    }

    return (
        <div className='book__card flow'>
            <h2 className='book__title'>{props.title}</h2>
            <p className='book__author'>{props.author}</p>
            <p className='book__pages'>Pages: {props.pages}</p>
            {readElement}
            <button className='book__remove-btn btn' onClick={clickHandler}>
                Remove
            </button>
            <button className='book__edit-btn' onClick={editHandler}>
                <ion-icon name="pencil-outline"></ion-icon>
            </button>
        </div>
    )
};

export default BookCard;