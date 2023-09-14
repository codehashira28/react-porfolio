import './styles.css'
import granulargarden from '../../assets/Granular-Garden-Home.png'
import pokeinfogenerator from '../../assets/Pokemon-Info-Generator.png'
import weatherdashboard from '../../assets/Weather-Dashboard.png'
import techblog from '../../assets/Tech-Blog.png'
import notetaker from '../../assets/Note-Taker.png'
import jate from '../../assets/J-A-T-E.png'
import github from '../../assets/github-logo.png'

function Project(props) {
    return (
        <div className="project">
            <img className="project-img" src={props.image} />
            <a className="project-link" href={props.appurl}>{props.projectTitle}</a>
            <a href={props.githuburl}>
                <img className="github-link" src={github} />
            </a>
        </div>
    )
}

function Portfolio() {
    return (
        <div id="portfolio" className="p-5">
            <h2>Portfolio</h2>
            <div className="mx-3 portfolio-container w-100 d-flex flex-wrap gap-3">
                <Project projectTitle="Granular Garden" image={granulargarden} appurl="https://frozen-tor-00446-d883d20dd32e.herokuapp.com/" githuburl="https://github.com/codehashira28/granular-garden"/>
                <Project projectTitle="Poke Info Generator" image={pokeinfogenerator} appurl="https://codehashira28.github.io/poke-info-generator/" githuburl="https://github.com/codehashira28/poke-info-generator"/>
                <Project projectTitle="Weather Dashboard" image={weatherdashboard} appurl="https://codehashira28.github.io/weather-dashboard/" githuburl="https://github.com/codehashira28/weather-dashboard"/>
                <Project projectTitle="Tech Blog" image={techblog} appurl="https://tech-blog-app-20230806-f48fb5f8b41d.herokuapp.com/" githuburl="https://github.com/codehashira28/tech-blog-app"/>
                <Project projectTitle="Note Taker" image={notetaker} appurl="https://pacific-river-80544-d245515ec8bd.herokuapp.com/" githuburl="https://github.com/codehashira28/note-taker"/>
                <Project projectTitle="Text Editor" image={jate} appurl="https://morning-refuge-10692-76df8b5397e0.herokuapp.com/" githuburl="https://github.com/codehashira28/pwa-text-editor"/>
            </div>
        </div>
    )
}

export default Portfolio;