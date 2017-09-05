import React from 'react';

import Header from '../components/Header/Header';
import Navbar from '../components/Navbar/Navbar';
import PhotoGallery from '../components/PhotoGallery/PhotoGallery';
//import './gallerypage.css';

class GalleryPage extends React.Component {
	constructor() {
		super();
		this.state = { searchText: '', searchTextSubmitted: '' };

		this.handleSearchTextChanged = this.handleSearchTextChanged.bind(this);
	}

	handleSearchTextChanged(value) {
		this.setState({ searchText: value });
	}

	render() {
		const path = this.props.match.path;
		const searchText = this.state.searchText;
		const searchTypeSubmitted = this.props.match.params.searchType;
		const searchTextSubmitted = this.props.match.params.searchText;

		return ( 
			<div>
				<Header />
				<Navbar 
					path={path} 
					onSearchTextChanged={this.handleSearchTextChanged}
					searchText={searchText}
				/>
				<PhotoGallery 
					searchTypeSubmitted={searchTypeSubmitted}
					searchTextSubmitted={searchTextSubmitted} 
				/>
			</div>
		);
	}
}

export default GalleryPage;