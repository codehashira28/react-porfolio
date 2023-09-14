import github from '../../assets/github-logo.png';
import linkedin from '../../assets/LinkedIn_logo.png';
import stack from '../../assets/stack.png';
import './styles.css'

function Footer() {
    return (
        <div id="footer" className="d-flex justify-content-center align-items-center">
            <a href="https://github.com/codehashira28">
                <img className="logo github-footer" style={{width: '60px'}}src={github} />
            </a>
            <a href="https://www.linkedin.com/in/joshua-williams-8a5136101">
                <img className="mt-1 mx-5 logo" style={{height: '45px'}}src={linkedin} />
            </a>
            <a href="https://stackoverflow.com/users/22545511/joshua-williams">
                <img className="mx-2 logo" style={{width: '40px'}}src={stack} />
            </a>
        </div>
    )
}

export default Footer;