import './styles.css'

function Nav({ currentPage, setPage }) {
    const changePage = (e, page) => {
        e.preventDefault();
        setPage(page);
    }

    return (
    <>
        <header className="header-scheme d-flex justify-content-between align-items-center p-5">
            <h1 className="w-50">Joshua Willams</h1>
            <nav className="d-flex justify-content-between w-50">
                <a className="nav-links" style={currentPage === 'About' ? {color: "#4F7CAC"} : {color: "#E6FAFC"}} onClick={(e) => changePage(e, 'About')}>About Me</a>
                <a className="nav-links" style={currentPage === 'Portfolio' ? {color: "#4F7CAC"} : {color: "#E6FAFC"}} onClick={(e) => changePage(e, 'Portfolio')}>Portfolio</a>
                <a className="nav-links" style={currentPage === 'Contact' ? {color: "#4F7CAC"} : {color: "#E6FAFC"}} onClick={(e) => changePage(e, 'Contact')}>Contact</a>
                <a className="nav-links" style={currentPage === 'Resume' ? {color: "#4F7CAC"} : {color: "#E6FAFC"}} onClick={(e) => changePage(e, 'Resume')}>Resume</a>
            </nav>
        </header>
    </>
    )
}

export default Nav;