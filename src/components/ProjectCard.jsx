import '../style/ProjectCard.scss';
import { Link } from 'react-router-dom';
export default function Project({project, to}) {
	return (
		<Link to={to}>
			<div className={`ProjectCard${(project.featured?` featured`:``)}`}>
				{project.featured && project.featuredText ? <span className="featured-text">{project.featuredText}</span> : ``}
				<div className="project-container">
					{project.hasBackground ?<img className="project-background" src={`./images/projects/${project.id}-background.jpg`} alt="" /> : ``}
					{project.hasLogo ? <img className="project-logo" src={`./images/projects/${project.id}-logo.png`} alt="" /> : ``}
				</div>
			</div>
		</Link>
	);
}