import '../style/FrontPage.scss';
import KeyboardArrowDownIcon from '@material-ui/icons/KeyboardArrowDown';

//import projects from '../data/projects.json';
//const featuredProjects = projects.filter(projet => projet.featured);

function scrollToProjects(){
	document.getElementById(`Projects`).scrollIntoView();
}

export default function FrontPage() {
	return (
		<div className="FrontPage">
			<div className="featured page-container">
				<div className="bio">
					<h1 className="bio-title">Je suis</h1>
					<ul className="key-words">
						<li>Passioné</li>
						<li>Rigoureux</li>
						<li>Autoditacte</li>
					</ul>
					<p className="desc">
						Fan du jeu et du web, j'adore apprendre, relever des défis, me surpasser et travailer sur des projets passionnants.
					</p>
					<a className="linkedIn" href="mailto:maxime.rioux7@gmail.com"><button className="portfolio-button">Me contacter</button></a>
				</div>
				<div className="portfolio-showcase">
					<img src="" onError={null} alt=""/>
				</div>
			</div>
			<div className="projects-pointer" onClick={scrollToProjects}>
				<h2 className="pointer-title">Projets</h2>
				<KeyboardArrowDownIcon className="arrow-icon" />
			</div>
		</div>
	);
}