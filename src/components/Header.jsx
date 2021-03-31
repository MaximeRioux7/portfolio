import '../style/Header.scss';
import { Link } from 'react-router-dom';
import LinkedInIcon from '@material-ui/icons/LinkedIn';

export default function Header() {
	return (
		<div className="Header">
			<Link to={`/`}><div className="logo-area">
				<span className="text-logo">MR</span>
				<span className="inline-bar" style={{width: '25px'}}></span>
				<p>Maxime Rioux</p>
			</div></Link>
			<div className="contact">
				<a className="linkedIn" target="blank" href="https://www.linkedin.com/in/maxime-rioux-a1322a1bb/"><LinkedInIcon fontSize="large" /></a><a href="mailto:maxime.rioux7@gmail.com">maxime.rioux7@gmail.com</a>
			</div>
		</div>
	);
}