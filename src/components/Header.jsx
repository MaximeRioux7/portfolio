import '../style/Header.scss';
export default function Header() {
	return (
		<div className="Header">
			<div className="logo-area">
				<span className="text-logo">MR</span>
				<span className="inline-bar" style={{width: '40px'}}></span>
				<p>Maxime Rioux</p>
			</div>
			<div className="contact">
				<button className="portfolio-button-color">Me contacter</button>
			</div>
		</div>
	);
}