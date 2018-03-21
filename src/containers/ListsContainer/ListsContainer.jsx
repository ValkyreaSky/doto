import React, { Component } from 'react';
import { connect } from 'react-redux';

function mapStateToProps(state) {
	return {
		lists: state.lists
	};
}

class ListsContainer extends Component {
	render() {
		return (
			<div className="lists">
				{this.props.lists.map((list) => {
					return <p key={list.id}>{list.name}=={list.id}</p>;
				})}
			</div>
		);
	}
}

export default connect(
	mapStateToProps,
)(ListsContainer);
