import React, { Component } from 'react';

class App extends Component {
	state = {
		cards: [
			{
				title: '',
				url: ''
			}
		],
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
		let newCard = { title: this.state.titleValue, url: this.state.urlValue };
		this.setState({ cards: this.state.cards.concat(newCard) });
	};
	render() {
		const { cards, titleValue, urlValue } = this.state;
		return (
			<div className="App">
				<div className="left-side">
					<input value={titleValue} onChange={this.handleTitleChange} placeholder="Title" />
					<input value={urlValue} onChange={this.handleUrlChange} placeholder="URL" />
					<button onClick={this.buttonClick}>Save</button>
				</div>
				<div className="right-side">
					<div className="card">
						{cards.length > 0 ? (
							cards.map(name => (
								<div>
									<h1>{name.title}</h1>
									<h1>{name.url}</h1>
                                    <button>Read</button>
                                    <button>Delete</button>
								</div>
							))
						) : (
							<div />
						)}
					</div>
				</div>
			</div>
		);
	}
}

export default App;
