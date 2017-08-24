import React from 'react';

import { Link, NavLink } from 'react-router-dom';
//import './navbar.css';

class Navbar extends React.Component {
	render() {
		const path = this.props.path;
		return (
			<nav className="navbar sticky-top navbar-expand-lg navbar-dark bg-dark">
				<Link 
					to="/gallery"
					className="navbar-brand"
					>
						Harald Kismul
				</Link>
				<button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
					<span className="navbar-toggler-icon"></span>
				</button>

				<div className="collapse navbar-collapse" id="navbarSupportedContent">
					<ul className="navbar-nav mr-auto">
						<li className="nav-item active">
							<NavLink 
								to="/gallery"
								activeClassName="active"
								className="nav-link"
								>
									Galleri
							</NavLink>
						</li>
						<li className="nav-item">
							<NavLink 
								to="/about"
								activeClassName="active"
								className="nav-link"
								>
									Om Harald
							</NavLink>
						</li>
					</ul>
					{ path === "/gallery" &&  
						<form className="form-inline my-2 my-lg-0">
							<input className="form-control mr-sm-2" type="text" placeholder="Search" aria-label="Search" />
							<button className="btn btn-outline-success my-2 my-sm-0" type="submit">Search</button>
						</form>
					}
				</div>
			</nav>
		);
	}
}

export default Navbar;