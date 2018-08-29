import React, { Component } from 'react';

class App extends Component {
	state = {
		card: [],
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
			card: [...this.state.card, this.state.titleValue, this.state.urlValue]
		});
	};
	render() {
		const { card, titleValue, urlValue } = this.state;
		return (
			<div className="App">
				<div className="left-side">
					<input value={titleValue} onChange={this.handleTitleChange} placeholder="Title" />
					<input value={urlValue} onChange={this.handleUrlChange} placeholder="URL" />
					<button onClick={this.buttonClick}>Save</button>
				</div>
				<div className="right-side">
					<div className="card">
						{card.map(name => (
							<div>
								<h1>{name}</h1>
							</div>
						))}
					</div>
				</div>
			</div>
		);
	}
}

export default App;
