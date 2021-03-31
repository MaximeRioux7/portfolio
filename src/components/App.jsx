import Header from './Header';
import Footer from './Footer';
import ScrollToTopButton from './ScrollToTopButton';

import {Route, Switch} from 'react-router-dom';

import Home from './Home';
import Project from './Project';

import '../style/App.scss';

export default function App() {
	return (
		<div className="App">
			<span id="top" style={{position: 'absolute', opacity: 0, top: 0, left: 0}}></span>
			<Header />
			<main>
				<Switch>
						<Route path="/" component={Home} exact/>
						<Route path="/project" component={Project} />
				</Switch>
			</main>
			<Footer />
			<ScrollToTopButton />
		</div>
	);
}