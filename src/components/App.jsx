import Header from './Header';
import Footer from './Footer';

import {Route, Switch} from 'react-router-dom';

import Home from './Home';
import Project from './Project';

import '../style/App.scss';

export default function App() {
	return (
		<div className="App">
			<Header />
			<main>
				<Switch>
						<Route path="/" component={Home} exact/>
						<Route path="/project" component={Project} />
				</Switch>
			</main>
			<Footer />
		</div>
	);
}