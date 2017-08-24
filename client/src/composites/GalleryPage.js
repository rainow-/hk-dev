import React from 'react';

import Header from '../components/Header/Header';
import Navbar from '../components/Navbar/Navbar';
import PhotoGallery from '../components/PhotoGallery/PhotoGallery';
//import './gallerypage.css';

class GalleryPage extends React.Component {
	render() {
		const path = this.props.match.path;
		return ( 
			<div>
				<Header />
				<Navbar path={path}/>
				<PhotoGallery />
			</div>
		);
	}
}

export default GalleryPage;