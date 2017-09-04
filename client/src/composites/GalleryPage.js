import React from 'react';

import Header from '../components/Header/Header';
import Navbar from '../components/Navbar/Navbar';
import PhotoGallery from '../components/PhotoGallery/PhotoGallery';
//import './gallerypage.css';

class GalleryPage extends React.Component {
	constructor() {
		super();
		this.state = { searchText: '', searchTextSubmitted: '' };

		this.handleSearchSubmit = this.handleSearchSubmit.bind(this);
		this.handleSearchTextChanged = this.handleSearchTextChanged.bind(this);
	}

	handleSearchSubmit(value) {
		this.setState({ searchTextSubmitted: value });
	}

	handleSearchTextChanged(value) {
		this.setState({ searchText: value });
	}

	render() {
		const path = this.props.match.path;
		const searchText = this.state.searchText;
		const searchTextSubmitted = this.props.match.params.searchText || this.state.searchTextSubmitted;

		return ( 
			<div>
				<Header />
				<Navbar 
					path={path} 
					onSearchSubmit={this.handleSearchSubmit}
					onSearchTextChanged={this.handleSearchTextChanged}
					searchText={searchText}
				/>
				<PhotoGallery searchTextSubmitted={searchTextSubmitted} />
			</div>
		);
	}
}

export default GalleryPage;