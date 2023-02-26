import './BookForm.css';
import {useState} from "react";

const BookForm = (props) => {
    const [enteredTitle, setEnteredTitle] = useState('');
    const [enteredAuthor, setEnteredAuthor] = useState('');
    const [enteredPages, setEnteredPages] = useState('');
    const [enteredIsRead, setEnteredIsRead] = useState(false);

    const titleChangeHandler = (event) => {
        setEnteredTitle(event.target.value);
    }

    const authorChangeHandler = (event) => {
        setEnteredAuthor(event.target.value);
    }

    const pagesChangeHandler = (event) => {
        setEnteredPages(event.target.value);
    }

    const isReadChangeHandler = (event) => {
        setEnteredIsRead(event.target.checked);
    }

    const submitHandler = (event) => {
        event.preventDefault();
        const bookData = {
            id: 'book' + Math.random(),
            title: enteredTitle,
            author: enteredAuthor,
            pages: Number(enteredPages),
            isRead: enteredIsRead,
        }
        props.onAddBook(bookData);
    }

    return (
        <div className='book__form-wrapper'>
            <form className='book__form grid grid--items-center grid--gap' onSubmit={submitHandler}>
                <h2 className='book__form-heading'>Add new Book</h2>
                <div className='book__input-wrapper'>
                    <label className='book__input-label' htmlFor='book__input-title'>
                        <input
                            onChange={titleChangeHandler}
                            type='text'
                            name='book__input-title'
                            id='book__input-title'
                            className='book__input'
                            placeholder='Title'
                            required
                        />
                    </label>
                </div>
                <div className='book__input-wrapper'>
                    <label className='book__input-label' htmlFor='book__input-author'>
                        <input
                            onChange={authorChangeHandler}
                            type='text'
                            name='book__input-author'
                            id='book__input-author'
                            className='book__input'
                            placeholder='Author'
                            required
                        />
                    </label>
                </div>
                <div className='book__input-wrapper'>
                    <label className='book__input-label' htmlFor='book__input-pages'>
                        <input
                            onChange={pagesChangeHandler}
                            type='text'
                            name='book__input-pages'
                            id='book__input-pages'
                            className='book__input'
                            placeholder='Pages'
                            required
                        />
                    </label>
                </div>
                <div className='book__input-wrapper'>
                    <label className='book__input-label book__input-label--read' htmlFor='book__input-read'>Have you read it?</label>
                    <input
                        onChange={isReadChangeHandler}
                        type='checkbox'
                        name='book__input-read'
                        id='book__input-read'
                        className='book__input'
                    />
                </div>
                <button className='book__form-btn btn btn--green' type='submit'>Add Book</button>
                <button className='book__form-btn--close' type='button' onClick={props.onClose}>
                    <ion-icon name="close-outline"></ion-icon>
                </button>
            </form>
        </div>
    )
};

export default BookForm;