import './styles.css'

function Nav() {
    return (
    <>
        <header className="header-scheme d-flex justify-content-between align-items-center p-5">
            <h1 className="w-50">Joshua Willams</h1>
            <nav className="d-flex justify-content-between w-50">
                <a className="nav-links">About Me</a>
                <a className="nav-links">Portfolio</a>
                <a className="nav-links">Contact</a>
                <a className="nav-links">Resume</a>
            </nav>
        </header>
    </>
    )
}

export default Nav;