import React from 'react';
import { Link, NavLink } from 'react-router-dom';

import SearchField from './SearchField';

class Navbar extends React.Component {
	render() {
		const path = this.props.path ? this.props.path.startsWith('/gallery') : false;
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
					{ path && 
						<ul className="navbar-nav">
							<div className="dropdown mr-2">
								<button className="btn btn-secondary dropdown-toggle" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
									Sorter etter ...
								</button>
								<div className="dropdown-menu">
									<Link className="dropdown-item" to="/gallery/sort/newest">Nyeste først</Link>
									<Link className="dropdown-item" to="/gallery/sort/oldest">Eldste først</Link>
									{/*<div className="dropdown-divider"></div>
									<h6 className="dropdown-header text-center">Motiver</h6>
									<Link className="dropdown-item" to="/gallery/motive/bergen">Bergen</Link>
									<Link className="dropdown-item" to="/gallery/motive/nature">Natur</Link>
									<Link className="dropdown-item" to="/gallery/motive/abstract">Abstrakt</Link>
									<Link className="dropdown-item" to="/gallery/motive/surreal">Surrealistisk</Link>
									<Link className="dropdown-item" to="/gallery/motive/other">Annet</Link>
									<div className="dropdown-divider"></div>
									<Link className="dropdown-item" to="/gallery/type/canvas">Malt på lerret</Link>
									<Link className="dropdown-item" to="/gallery/type/hardboard">Malt på tavle</Link>*/}
								</div>
							</div>
							<SearchField 
								onSearchTextChanged={this.props.onSearchTextChanged}
								searchText={this.props.searchText}
							/>
						</ul>
					}
				</div>
			</nav>
		);
	}
}

export default Navbar;