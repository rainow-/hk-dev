import React from 'react';
import Gallery from 'react-photo-gallery';
import Measure from 'react-measure';
import Lightbox from 'react-images';
import Client from '../../utils/Client';
import './photogallery.css';

function debounce(func, wait, immediate) {
	let timeout;
	return function() {
		const context = this, args = arguments;
		let later = function() {
			timeout = null;
			if (!immediate) func.apply(context, args);
		};
		const callNow = immediate && !timeout;
		clearTimeout(timeout);
		timeout = setTimeout(later, wait);
		if (callNow) func.apply(context, args);
	};
};

class PhotoGallery extends React.Component{
	constructor(){
		super();
		this.state = {photos:null, pageNum:1, totalPages:1, loadedAll: false, currentImage:0};
		this.handleScroll = this.handleScroll.bind(this);
		this.loadMorePhotos = this.loadMorePhotos.bind(this);
		this.closeLightbox = this.closeLightbox.bind(this);
		this.openLightbox = this.openLightbox.bind(this);
		this.gotoNext = this.gotoNext.bind(this);
		this.gotoPrevious = this.gotoPrevious.bind(this);
	}
	componentDidMount() {
		this.loadMorePhotos();
		this.loadMorePhotos = debounce(this.loadMorePhotos, 200);
		window.addEventListener('scroll', this.handleScroll);
	}
	componentWillUnmount() {
		window.removeEventListener('scroll', this.handleScroll);
	}
	handleScroll(){
		let scrollY = window.scrollY || window.pageYOffset || document.documentElement.scrollTop;
		if ((window.innerHeight + scrollY) >= (document.body.offsetHeight - 50)) {
			this.loadMorePhotos();
		}
	}
	loadMorePhotos(e){
		if (e){
			e.preventDefault();
		}
		if (this.state.pageNum > this.state.totalPages){
			this.setState({loadedAll: true});
			return;
		}

		const params = {
			page: this.state.pageNum,
			per_page: 21,
		};

		Client.photoSet(params, (data) => {
			let photos = data.photoset.photo.map((item) => {
				let aspectRatio = parseFloat(item.width_o / item.height_o);
				return {
					src: (aspectRatio >= 3) ? item.url_c : item.url_m,
					width: item.width_o,
					height: item.height_o,
					caption: item.filename,
					alt: item.filename,
					srcset:[
						item.url_m+' '+item.width_m+'w',
						item.url_c+' '+item.width_c+'w',
						item.url_l+' '+item.width_l+'w',
						item.url_h+' '+item.width_h+'w'
					],
					sizes:[
						'(min-width: 480px) 50vw',
						'(min-width: 1024px) 33.3vw',
						'100vw'
					]
				};
			});
			this.setState({
				photos: this.state.photos ? this.state.photos.concat(photos) : photos,
				pageNum: this.state.pageNum + 1,
				totalPages: data.pages
			});
		});
	}
	openLightbox(index, event){
		event.preventDefault();
		this.setState({
			currentImage: index,
			lightboxIsOpen: true
		});
	}
	closeLightbox(){
		this.setState({
			currentImage: 0,
			lightboxIsOpen: false,
		});
	}
	gotoPrevious(){
		this.setState({
			currentImage: this.state.currentImage - 1,
		});
	}
	gotoNext(){
		if(this.state.photos.length - 2 === this.state.currentImage){
			this.loadMorePhotos();
		}
		this.setState({
			currentImage: this.state.currentImage + 1,
		});
	}
	renderGallery(){
		return(
	    	<Measure whitelist={['width']}>
	    	{
				({ width }) => {
		    		let cols = 1;
		    		if (width >= 480){
						cols = 2;
		    		}
		    		if (width >= 1024){
						cols = 3;
		    		}
		    		if (width >= 1824){
						cols = 4;
					}
		    		return <Gallery photos={this.state.photos} cols={cols} onClickPhoto={this.openLightbox} />
				}
	    	}
	    	</Measure>
		);
	}
	render(){
		// no loading sign if its all loaded
		if (this.state.photos){
			return(
				<div className="PhotoGallery">
					{this.renderGallery()}
					<Lightbox 
						theme={{container: { background: 'rgba(0, 0, 0, 0.85)' }}}
						images={this.state.photos}
						backdropClosesModal={true}
						onClose={this.closeLightbox}
						onClickPrev={this.gotoPrevious}
						onClickNext={this.gotoNext}
						currentImage={this.state.currentImage}
						isOpen={this.state.lightboxIsOpen}
						width={1600}
					/>
					{!this.state.loadedAll && <div className="loading-msg" id="msg-loading-more">Loading</div>}
				</div>
			);
			} else {
			return(
				<div className="PhotoGallery">
					<div id="msg-app-loading" className="loading-msg">Loading</div>
				</div>
			);
		}
	}
};

export default PhotoGallery;