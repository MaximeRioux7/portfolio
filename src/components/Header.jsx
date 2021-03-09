import '../style/Header.scss';
import { Link } from 'react-router-dom';

export default function Header() {
	return (
		<div className="Header">
			<span id="top" style={{display: `none`}}></span>
			<Link to={`/`}><div className="logo-area">
				<span className="text-logo">MR</span>
				<span className="inline-bar" style={{width: '25px'}}></span>
				<p>Maxime Rioux</p>
			</div></Link>
			<div className="contact">
				<button className="portfolio-button">Me contacter</button>
			</div>
		</div>
	);
}