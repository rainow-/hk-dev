import React from 'react';
import Gallery from 'react-photo-gallery';

export default class Sample extends React.Component {
	render() {
		return (
			<Gallery photos={PHOTO_SET} onClickPhoto={this.openLightbox} />
		);
	}
}

const PHOTO_SET = null;