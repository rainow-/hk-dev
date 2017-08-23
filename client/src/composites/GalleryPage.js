import React from 'react';
import Header from '../components/Header/Header';
import Navbar from '../components/Navbar/Navbar';
import PhotoGallery from '../components/PhotoGallery/PhotoGallery';
import './gallerypage.css';

class GalleryPage extends React.Component {
	render() {
		return(
			<div className="wrapper">
				<Header />
				<Navbar />
				<PhotoGallery />
			</div>
		);
	}
}

export default GalleryPage;