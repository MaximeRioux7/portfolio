import React from 'react';
import ReactDOM from 'react-dom';
import './style/index.scss';
import App from './components/App';
import {HashRouter} from 'react-router-dom';
import ScrollToTop from './components/ScrollToTop';

ReactDOM.render(
	<React.StrictMode>
		<HashRouter basename="/portfolio">
			<ScrollToTop />
			<App />
		</HashRouter>
	</React.StrictMode>,
	document.getElementById('root')
);