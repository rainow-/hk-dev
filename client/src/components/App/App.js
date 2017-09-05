import React from 'react';

import { Route, Redirect, Switch } from 'react-router-dom';

import GalleryPage from '../../composites/GalleryPage';
import AboutPage from '../../composites/AboutPage';

import './app.css';

const NoMatch = ({ location }) => (
	<div className="container">
	    <div className="row">
	        <div className="col-md-12">
	            <div className="error-template">
	                <h1>
	                    Oops!</h1>
	                <h2>
	                    404 Not Found</h2>
	                <div className="error-details">
	                    Beklager, en feil har oppstått. Siden <strong>{location.pathname}</strong> ble ikke funnet!
	                </div>
	                <div className="error-actions">
	                    <a href="/" className="btn btn-primary btn-lg"><span className="glyphicon glyphicon-home"></span>Ta meg tilbake til siden</a>
	                </div>
	            </div>
	        </div>
	    </div>
	</div>
);

const App = () => (
	<Switch>
		<Route path="/gallery/:searchType/:searchText" component={GalleryPage} />
		<Route path="/gallery" component={GalleryPage} />
		<Route path="/about" component={AboutPage} />
		
		<Route exact path="/" render={() => (
			<Redirect
				to="/gallery"
			/>
		)} />

		<Route component={NoMatch} />
	</Switch>
);

export default App;