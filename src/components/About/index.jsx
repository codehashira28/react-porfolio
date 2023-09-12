import './styles.css'
import photo from '../../assets/photo.jpg'

function About() {
    return (
        <div id="about-me" className="p-5">
            <h2>About Me</h2>
            <img className="my-3" id="photo" src={photo}/>
            <p>My name is Joshua Williams. I have a background in Engineering and am an aspiring web developer seeking to make my mark in the software development industry. I am eager to develop my skills even further in building software and build upon my current strengths. I am a passionate, positive team player driven to learn with a strong attention to detail. Outside of the workplace, I enjoy video games, anime, and time with friends and family. I like to think of myself as a well-rounded individual encompassing professionalism, amiability, and diligence that makes me a worthy candidate to consider for any development team.</p>
        </div>
    )
}

export default About;