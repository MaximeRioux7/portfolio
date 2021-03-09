import '../style/Footer.scss';
import CopyrightIcon from '@material-ui/icons/Copyright';

export default function Footer() {
	return (
		<div className="Footer">
			<div className="copyright page-container">
				<CopyrightIcon /><p> Maxime Rioux 2021-{new Date().getFullYear()}</p>
			</div>
		</div>
	);
}