import '../style/FrontPage.scss';
import KeyboardArrowDownIcon from '@material-ui/icons/KeyboardArrowDown';

//import projects from '../data/projects.json';
//const featuredProjects = projects.filter(projet => projet.featured);

export default function FrontPage() {
	return (
		<div className="FrontPage">
			<div className="featured page-container">
				<div className="bio">
					<h2 className="bio-title">Je suis</h2>
					<ul className="key-words">
						<li>Passioné</li>
						<li>Rigoureux</li>
						<li>Autoditacte</li>
					</ul>
					<p className="desc">
						Fan du jeu et du web, j'adore apprendre, relever des défis, me surpasser et travailer sur des projets passionnants.
					</p>
					<button className="portfolio-button">Me contacter</button>
				</div>
				<div className="portfolio-showcase">
					<img src="" alt=""/>
				</div>
			</div>
			<div className="projects-pointer">
				<h2 className="">Projets</h2>
				<KeyboardArrowDownIcon className="arrow-icon" />
			</div>
		</div>
	);
}