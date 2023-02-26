import {useState} from "react";
import BookCard from "./BookCard";
import BookCardEditForm from "./BookCardEditForm";
import './BookCardWrapper.css';

const BookCardWrapper = (props) => {
    const [showCardEditForm, setShowCardEditForm] = useState(false);
    const [editBook, setEditBook] = useState({});
    const [editBookIndex, setEditBookIndex] = useState(0);

    const editButtonHandler = (title) => {
        const book = {...props.books.find(element => element.title === title)};
        const index = props.books.findIndex(element => element.title === title);
        setEditBook(book);
        setEditBookIndex(index);
        showCardEditFormHandler();
    }

    const submitEditBookHandler = (editedBookData) => {
        props.onEdit(editBookIndex, editedBookData);
        hideCardEditFormHandler();
    }

    const showCardEditFormHandler = () => {
        setShowCardEditForm(true);
        props.showOverlay();
    }

    const hideCardEditFormHandler = () => {
        setShowCardEditForm(false);
        props.hideOverlay();
    }

    return (
        <div className='book__card-wrapper'>
            {showCardEditForm && (
                <BookCardEditForm
                    editBook={editBook}
                    onClose={hideCardEditFormHandler}
                    onSubmit={submitEditBookHandler}
                />
            )}
            {props.books.map(book => (
                <BookCard
                    key={book.id}
                    title={book.title}
                    author={book.author}
                    pages={book.pages}
                    isRead={book.isRead}
                    onRemove={props.onRemove}
                    onEdit={editButtonHandler}
                />
            ))}
        </div>
    )
}

export default BookCardWrapper;