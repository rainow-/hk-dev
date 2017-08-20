import React from 'react';
import classNames from 'classnames';
import './header.css';

class Header extends React.Component {
	constructor() {
		super();
		this.state = {smaller: false};
		this.handleScroll = this.handleScroll.bind(this);
	}
	componentDidMount() {
		window.addEventListener('scroll', this.handleScroll);
	}

	handleScroll(){
		let scrollY = window.scrollY || window.pageYOffset || document.documentElement.scrollTop, shrinkOn = 300;
		if(scrollY > shrinkOn){
			this.setState({smaller: true});
		} else {
			this.setState({smaller: false});
		}
	}

	render(){
		const flexClass = classNames({
			flexbox: true,
			'smaller': this.state.smaller
		});

		return(
			<div className="fixed">
				<div className={flexClass}>
					<h1 id="title">Kunst av Harald Kismul</h1>
					<nav>
						<a href="gallery"><h2 className="link">Gallery</h2></a>
						<a href="about"><h2 className="link">About</h2></a>
					</nav>
				</div>
			</div>
		);
	}
}

export default Header;