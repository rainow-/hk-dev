import React from 'react';

import { Link } from 'react-router-dom';
//import './header.css';

class Header extends React.Component {
	render() {
		return (
			<div className="jumbotron mb-0 d-flex align-items-center flex-column justify-content-center min-100" id="header">
				<h1 className="display-3">Malerier av Harald Kismul</h1>
				<p>Følgende billedgalleri viser malerier av Vestlandsmaler og billedhugger Harald Kismul</p>
				<Link className="btn btn-outline-secondary btn-lg" to="/about" role="button">Om Harald Kismul</Link>
			</div>
		);
	}
}

export default Header;