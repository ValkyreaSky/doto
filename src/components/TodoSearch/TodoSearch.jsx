import React, { Component } from 'react';

class TodoSearch extends Component {
	handleSearch = () => {
		const showCompleted = this.refs.showCompleted.checked;
		const searchText = this.refs.searchText.value;

		this.props.onSearch(showCompleted, searchText);
	}

	render() {
		return (
			<div>
				<input onChange={this.handleSearch} ref="searchText" type="text"/>
				<label>
					<input type="checkbox" ref="showCompleted" onChange={this.handleSearch}/>
					Show completed todos
				</label>
			</div>
		);
	}
}

export default TodoSearch;
