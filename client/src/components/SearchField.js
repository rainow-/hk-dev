import React from 'react';
import { Redirect } from 'react-router-dom';

class SearchField extends React.Component {
	constructor(props) {
		super(props);
		this.state = { fireRedirect: false };
		this.onSearchChange = this.onSearchChange.bind(this);
		this.handleSearchSubmit = this.handleSearchSubmit.bind(this);
	}

	onSearchChange(e) {
		this.props.onSearchTextChanged(e.target.value);
	}

	handleSearchSubmit(e) {
		e.preventDefault();
		this.setState({ fireRedirect: true });
	}

	componentDidUpdate(preProps, prevState){
		if(prevState.fireRedirect !== this.state.fireRedirect){
			this.setState({fireRedirect: false});
		}
	}

	render() {
		const { fireRedirect } = this.state;

		return (
			<div>
				<form onSubmit={this.handleSearchSubmit} className="form-inline my-2 my-lg-0">
					<input className="form-control mr-sm-2" type="text" value={this.props.searchText} onChange={this.onSearchChange} placeholder="Søk malerier" aria-label="Search" />
					<button className="btn btn-outline-success my-2 my-sm-0" type="submit">Søk</button>
				</form>
				{ fireRedirect && (
	          		<Redirect to={'/gallery/s/' + this.props.searchText}/>
       			)}
   			</div>
		);
	}
}

export default SearchField;