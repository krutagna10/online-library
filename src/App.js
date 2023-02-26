import Header from './components/Header/Header';
import Book from './components/Book/Book';
import {useState} from "react";

function App() {
    const [showOverlay, setShowOverlay] = useState(false);

    const hideOverlayFunction = () => {
        setShowOverlay(false);
    }

    const showOverlayFunction = () => {
        setShowOverlay(true);
    }

    return (
        <div className='app'>
            <Header/>
            <Book
                hideOverlay={hideOverlayFunction}
                showOverlay={showOverlayFunction}
            />
            {showOverlay && (
                <div className='overlay'></div>
                )}
        </div>
    );
}

export default App;
