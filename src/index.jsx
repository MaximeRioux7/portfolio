import React from 'react';
import ReactDOM from 'react-dom';
import './style/index.scss';
import App from './components/App';
import {Router} from 'react-router-dom';
import ScrollToTop from './components/ScrollToTop';
import History from './components/History';

ReactDOM.render(
	<React.StrictMode>
		<Router history={History} basename="/portfolio">
			<ScrollToTop />
			<App />
		</Router>
	</React.StrictMode>,
	document.getElementById('root')
);