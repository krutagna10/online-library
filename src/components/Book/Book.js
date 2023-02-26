import { useState } from 'react';
import BookCardWrapper from '../BookCard/BookCardWrapper';
import BookForm from "../BookForm/BookForm";
import './Book.css'

const DUMMY_BOOKS = [
    { id: 'book' + Math.random(), title: 'Game of Thrones', author: 'George .R. Martin', pages: 780, isRead: false},
    { id: 'book' + Math.random(), title: 'Lord of the Rings', author: 'J. R. R. Tolkien', pages: 300, isRead: true},
    { id: 'book' + Math.random(), title: 'Harry Potter', author: 'JK Rowling', pages: 450, isRead: false },
]

const Book = (props) => {

    const [books, setBooks] = useState(DUMMY_BOOKS);

    const [showForm, setShowForm] = useState(false);

    const addBookHandler = (book) => {
        hideFormHandler()
        setBooks(prevState => [...prevState, book]);
    }

    const removeBookHandler = (title) => {
        setBooks(prevState => {
            prevState.forEach((element, index)=> {
                if (element.title === title) {
                    prevState.splice(index, 1);
                }
            });

            return [...prevState];
        })
    }

    const editBookDataHandler = (bookIndex, editData) => {
        setBooks(prevState => {
            prevState[bookIndex] = {
                ...prevState[bookIndex],
                ...editData,
            }
            return prevState;
        });
    }

    const showFormHandler = () => {
        setShowForm(true);
        props.showOverlay();
    }

    const hideFormHandler = () => {
        setShowForm(false);
        props.hideOverlay();
    }

    return (
        <section className='book-section'>
            <div className='book container'>
                <button onClick={showFormHandler} className='book__add-btn btn'>
                    Add New Book
                </button>

                {showForm && (
                    <BookForm
                        onAddBook={addBookHandler}
                        onClose={hideFormHandler}
                        books={books}
                    />
                )}

                <BookCardWrapper
                    books={books}
                    onRemove={removeBookHandler}
                    onEdit={editBookDataHandler}
                    hideOverlay={props.hideOverlay}
                    showOverlay={props.showOverlay}
                />
            </div>
        </section>
    )
};

export default Book;