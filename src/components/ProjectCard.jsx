import '../style/ProjectCard.scss';
export default function Project({project}) {
	return (
		<div className={`ProjectCard${(project.featured?` featured`:``)}`}>
			{project.featured && project.featuredText ? <span className="featured-text">{project.featuredText}</span> : ``}
			<div className="project-container">
				{project.hasBackground ?<img className="project-background" src={`./images/projects/${project.id}-background.png`} alt="" /> : ``}
				{project.hasLogo ? <img className="project-logo" src={`./images/projects/${project.id}-logo.png`} alt="" /> : ``}
			</div>
		</div>
	);
}