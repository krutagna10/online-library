import './Header.css'

const Header = () => {
    return (
        <section className='header-section'>
            <div className='header container flex flex--justify-space flex--align-center'>
                <div className='header__logo-wrapper'>
                    <h1 className='header__logo'>library</h1>
                </div>
                <button className='header__btn btn'>Log in</button>
            </div>
        </section>
    )
}

export default Header;