import React from 'react';

//import './header.css';

class Header extends React.Component {
	render() {
		return (
			<div className="jumbotron mb-0 d-flex align-items-center flex-column justify-content-center min-100" id="header">
				<h1 className="display-3">Art by Harald Kismul</h1>
				<p>This gallery contains pictures of paintings made by Harald Kismul</p>
				<p className="btn btn-outline-secondary btn-lg" href="#" role="button">About Harald Kismul</p>
			</div>
		);
	}
}

export default Header;