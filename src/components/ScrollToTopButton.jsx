import '../style/ScrollToTopButton.scss';
import KeyboardArrowUpIcon from '@material-ui/icons/KeyboardArrowUp';

function ScrollToTop(){
    document.getElementById(`top`).scrollIntoView();
}

export default function App() {
	return (
		<div className="ScrollToTopButton" onClick={ScrollToTop}>
			<KeyboardArrowUpIcon className="arrow-icon" />
		</div>
	);
}