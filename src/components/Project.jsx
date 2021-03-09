import projects from '../data/projects.json';
import '../style/Project.scss';
import { Link } from 'react-router-dom';

export default function Project(props) {
	const id = props.location.pathname.split(`/`)[2];
	const key = projects.map(x => x.id).indexOf(id);
	const project = projects[key];

	return (
		<div className="Project">
            <div className="project-header">
				<img className="project-showcase" src={`./images/projects/${id}-${project.showcaseImage}`} onError={null} alt="" />
				<div className="project-identity">
					{(project.hasLogo ? <img className="project-logo" src={`./images/projects/${id}-logo.png`} onError={null} alt="" /> : <h1 className="project-title">{project.name}</h1>)}
				</div>
				<div className="page-container">
					<Link to={`/`}>
						<button className="portfolio-button">Retour à l'accueil</button>
					</Link>
				</div>
			</div>
			<div className="project-content">
				{project.content.map((section, i) =>
					<div key={i} className="project-section">
						<div className="section-container">
							<img className="section-image" src={`./images/projects/${id}-${section.image}`} onError={null} alt="" />
							<div className="section-description">
								<h2 className="section-title">{section.title}</h2>
								<div className="section-text">
									{section.text.map((p, ii) => <p key={ii}>{p}</p>)}
								</div>
							</div>
						</div>
					</div>
				)}
			</div>
		</div>
	);
}