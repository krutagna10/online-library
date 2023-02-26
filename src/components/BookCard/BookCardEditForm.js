import './BookCardEditForm.css';
import {useState} from "react";

const BookCardEditForm = (props) => {
    const [editTitle, setEditTitle] = useState(props.editBook.title);
    const [editAuthor, setEditAuthor] = useState(props.editBook.author);
    const [editPages, setEditPages] = useState(props.editBook.pages);
    const [editIsRead, setEditIsRead] = useState(props.editBook.isRead);

    const editTitleHandler = (event) => {
        setEditTitle(event.target.value);
    };

    const editAuthorHandler = (event) => {
        setEditAuthor(event.target.value);
    };

    const editPagesHandler = (event) => {
        setEditPages(event.target.value);
    };

    const editIsReadHandler = (event) => {
        setEditIsRead(event.target.checked);
    };

    const editFormSubmitHandler = (event) => {
        event.preventDefault();
        const editedBookData = {
            title: editTitle,
            author: editAuthor,
            pages: Number(editPages),
            isRead: editIsRead
        }
        props.onSubmit(editedBookData);
    }

    return (
        <div className='book__edit-form-wrapper'>
            <form className='book__edit-form grid grid--items-center grid--gap' onSubmit={editFormSubmitHandler}>
                <h2 className='book__edit-form-heading'>Edit Book</h2>
                <div className='book__edit-input-wrapper'>
                    <label className='book__edit-input-label' htmlFor='book__edit-input-title'>
                        <input
                            type='text'
                            name="book__edit-input-title"
                            id="book__edit-input-title"
                            className='book__edit-input'
                            placeholder='Title'
                            onChange={editTitleHandler}
                            value={editTitle}
                            required
                        />
                    </label>
                </div>
                <div className='book__edit-input-wrapper'>
                    <label className='book__edit-input-label' htmlFor='book__edit-input-author'>
                        <input
                            type='text'
                            name='book__edit-input-author'
                            id='book__edit-input-author'
                            className='book__edit-input'
                            placeholder='Author'
                            onChange={editAuthorHandler}
                            value={editAuthor}
                            required
                        />
                    </label>
                </div>
                <div className='book__edit-input-wrapper'>
                    <label className='book__edit-input-label' htmlFor='book__edit-input-pages'>
                        <input
                            type='text'
                            name='book__edit-input-pages'
                            id='book__edit-input-pages'
                            className='book__edit-input'
                            placeholder='Pages'
                            onChange={editPagesHandler}
                            value={editPages}
                            required
                        />
                    </label>
                </div>
                <div className='book__edit-input-wrapper'>
                    <label className='book__edit-input-label book__edit-input-label--read' htmlFor='book__input-read'>
                        Have you read it?
                    </label>
                    <input
                        type='checkbox'
                        name='book__edit-input-read'
                        id='book__edit-input-read'
                        className='book__edit-input'
                        onChange={editIsReadHandler}
                        checked={editIsRead}
                    />
                </div>
                <button className='book__edit-form-btn btn btn--green' type='submit'>Edit Book</button>
                <button className='book__edit-form-btn--close' type='button' onClick={props.onClose}>
                    <ion-icon name="close-outline"></ion-icon>
                </button>
            </form>
        </div>
    )
}

export default BookCardEditForm;