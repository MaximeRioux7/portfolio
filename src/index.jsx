import React from 'react';
import ReactDOM from 'react-dom';
import './style/index.scss';
import App from './components/App';
import {BrowserRouter} from 'react-router-dom';
import ScrollToTop from './components/ScrollToTop';
import History from './components/History';

ReactDOM.render(
	<React.StrictMode>
		<BrowserRouter basename="/portfolio">
			<ScrollToTop />
			<App />
		</BrowserRouter>
	</React.StrictMode>,
	document.getElementById('root')
);