import React from 'react';

class Infobox extends React.Component {
	render() {

		var title = this.props.title ? <strong>{this.props.title}</strong> : 'bildet';

		var extras = [];
		if(this.props.date_painted) 
			extras.push(
							<p key={this.props.date_painted}>
								<strong>Dato malt:</strong> {this.props.date_painted}
							</p>
						);

		if(this.props.b_info) 
			extras.push(
							<p key={this.props.b_info}>
								<strong>Om bildet:</strong> {this.props.b_info}
							</p>
						);
		
		if(this.props.width && this.props.height) 
			extras.push(
							<p key={this.props.width}>
								<strong>Mål:</strong> {this.props.width}x{this.props.height} cm
							</p>
						);

		if(this.props.motive) 
			extras.push(	
							<p key={this.props.motive}>
								<strong>Motiv:</strong> {this.props.motive}
							</p>
						);
		if(this.props.canvas_type) 
			extras.push(	
							<p key={this.props.canvas_type}>
								<strong>Type maleri:</strong> {this.props.canvas_type}
							</p>
						);

		return (
			<div>
				<button type="button" className="btn btn-outline-secondary" data-toggle="modal" data-target="#infoboxModal">
					<i className="fa fa-info-circle fa-lg" aria-hidden="true"> Om bildet</i>
				</button>

				<div className="modal fade" id="infoboxModal" tabIndex="-1" role="dialog" aria-labelledby="infoboxLabel" aria-hidden="true" style={fadeStyle}>
					<div className="modal-dialog" role="document">
						<div className="modal-content">
							<div className="modal-header">
								<h5 className="modal-title" id="infoboxLabel" style={textStyle}>Informasjon om {title}</h5>
								<button type="button" className="close" data-dismiss="modal" aria-label="Lukk">
									<span aria-hidden="true">&times;</span>
								</button>
							</div>
							<div className="modal-body" style={textStyle}>
								{extras}
							</div>
							<div className="modal-footer">
								<button type="button" className="btn btn-secondary" data-dismiss="modal">Lukk</button>
							</div>
						</div>
					</div>
				</div>
			</div>
		);
	}
}

/* STYLE */

const textStyle = {
	color: 'black',
};

const fadeStyle = {
	background: 'rgba(0, 0, 0, 0.6)',
}
export default Infobox;