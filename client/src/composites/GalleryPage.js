import React from 'react';
import Header from '../components/Header/Header';
import PhotoGallery from '../components/PhotoGallery/PhotoGallery';
import './gallerypage.css';

class GalleryPage extends React.Component {
	constructor() {
		super();
	}

	render() {
		return(
			<div className="wrapper">
				<Header />
				<PhotoGallery />
			</div>
		);
	}
}

export default GalleryPage;