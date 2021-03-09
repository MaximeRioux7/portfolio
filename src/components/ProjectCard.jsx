import '../style/ProjectCard.scss';
export default function Project({id, name, featured, featuredText}) {
	return (
		<div className={`ProjectCard${(featured?` featured`:``)}`}>
			{featured && featuredText ? <span className="featured-text">{featuredText}</span> : ``}
			<div className="project-container">
				<img className="project-background" src={`/images/projects/${id}-background.png`} alt="" />
				<img className="project-logo" src={`/images/projects/${id}-logo.png`} alt="" />
			</div>
		</div>
	);
}