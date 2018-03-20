import React, { Component } from 'react';
import { connect } from 'react-redux';
import { setSearchText, toggleShowCompleted } from '../../actions/actions';


export class TodoSearch extends Component {
	render() {
		const { dispatch, showCompleted, searchText } = this.props;
		return (
			<div>
				<input
					value={searchText}
					onChange={() => dispatch(setSearchText(this.searchText.value))}
					ref={input => this.searchText = input}
					type="text"/>
				<label>
					<input
						type="checkbox"
						checked={showCompleted}
						ref={checkbox => this.showCompletedCheckbox = checkbox}
						onChange={() => dispatch(toggleShowCompleted())}/>
					Show completed todos
				</label>
			</div>
		);
	}
}

const mapStateToProps = (state) => {
	return {
		showCompleted: state.showCompleted,
		searchText: state.searchText
	};
};

export default connect(mapStateToProps)(TodoSearch);
