import './styles.css'
import granulargarden from '../../assets/Granular-Garden-Home.png'
import pokeinfogenerator from '../../assets/Pokemon-Info-Generator.png'
import weatherdashboard from '../../assets/Weather-Dashboard.png'
import techblog from '../../assets/Tech-Blog.png'
import notetaker from '../../assets/Note-Taker.png'
import jate from '../../assets/J-A-T-E.png'

function Portfolio() {
    return (
        <div id="portfolio" className="p-5">
            <h2>Portfolio</h2>
            <div className="mx-3 portfolio-container w-100 d-flex flex-wrap gap-3">
                <div className="project">
                    <img className="project-img" src={granulargarden} />
                    <a className="project-link" href="https://frozen-tor-00446-d883d20dd32e.herokuapp.com/">Granular Garden</a>
                </div>
                <div className="project">
                    <img className="project-img" src={pokeinfogenerator} />
                    <a className="project-link" href="https://codehashira28.github.io/poke-info-generator/">Poke Info Generator</a>
                </div>
                <div className="project">
                    <img className="project-img" src={weatherdashboard} />
                    <a className="project-link" href="https://codehashira28.github.io/weather-dashboard/">Weather Dashboard</a>
                </div>
                <div className="project">
                    <img className="project-img" src={techblog} />
                    <a className="project-link" href="https://tech-blog-app-20230806-f48fb5f8b41d.herokuapp.com/">Tech Blog</a>
                </div>
                <div className="project">
                    <img className="project-img" src={notetaker} />
                    <a className="project-link" href="https://pacific-river-80544-d245515ec8bd.herokuapp.com/">Note Taker</a>
                </div>
                <div className="project">
                    <img className="project-img" src={jate} />
                    <a className="project-link" href="https://morning-refuge-10692-76df8b5397e0.herokuapp.com/">Text Editor</a>
                </div>
            </div>
        </div>
    )
}

export default Portfolio;