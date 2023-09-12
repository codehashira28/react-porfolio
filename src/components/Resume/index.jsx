import './styles.css'
import resume from '../../assets/Official Resume.pdf'

function Resume() {
    return (
        <div className="p-5 d-flex gap-3 flex-column align-items-center" id="resume">
            <h2>Resume</h2>
            <h6>Download my <a id="resume-pdf" href={resume}>resume</a></h6>
            <div className="d-flex gap-5 proficiencies-wrapper mt-3">
                <div className="d-flex flex-column front-end-wrapper">
                    <h4>Front-end Proficiencies</h4>
                    <ul>
                        <li>HTML</li>
                        <li>CSS</li>
                        <li>JavaScript</li>
                        <li>React</li>
                        <li>BootStrap</li>
                        <li>Responsive Design</li>
                    </ul>
                </div>

                <div className="d-flex flex-column back-end-wrapper">
                    <h4>Back-end Proficiencies</h4>
                    <ul>
                        <li>APIs</li>
                        <li>Node</li>
                        <li>Express</li>
                        <li>MongoDB, Mongoose</li>
                        <li>MySQL, Sequelize</li>
                        <li>GraphQL</li>
                    </ul>
                </div>
            </div>
        </div>
    )
}

export default Resume;