import React, { Component } from 'react';

class App extends Component {
	state = {
		title: [],
		url: [],
		titleValue: '',
		urlValue: ''
	};
	handleTitleChange = event => {
		this.setState({ titleValue: event.target.value });
	};
	handleUrlChange = event => {
		this.setState({ urlValue: event.target.value });
	};
	buttonClick = () => {
		this.setState({
			title: [...this.state.title, this.state.titleValue],
			url: [...this.state.url, this.state.urlValue]
		});
	};
	render() {
		const { title, url } = this.state;
		return (
			<div className="App">
				<div className="left-side">
					<input onChange={this.handleTitleChange} placeholder="Title" />
					<input onChange={this.handleUrlChange} placeholder="URL" />
					<button onClick={this.buttonClick}>Save</button>
				</div>
				<div className="right-side">{
					title.map(name => <h1>{name}</h1>)
				url.map(website => <h1>{website}</h1>)
				}</div>
			</div>
		);
	}
}

export default App;
