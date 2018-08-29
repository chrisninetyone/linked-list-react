import React, { Component } from 'react';
import './App.css';
import styled from 'styled-components';
import Card from './Card';

class App extends Component {
	state = {
		cards: [],
		titleValue: '',
		urlValue: '',
		isActive: false
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
	readButtonClick = () => {
		this.setState({isActive: !this.state.isActive})

	}
	render() {
		const SubmitButton = styled.button`
		color: #455A64;
		`

		const { cards, titleValue, urlValue } = this.state;
		return (
			<div className="App">
				<div className="left-side">
					<input value={titleValue} onChange={this.handleTitleChange} placeholder="Title" />
					<input value={urlValue} onChange={this.handleUrlChange} placeholder="URL" />
					<SubmitButton onClick={this.buttonClick}>Submit</SubmitButton>
				</div>
				<div className="right-side">
					<span className={this.state.isActive ? 'read' : 'unread'}>
					<Card cards={cards} readButtonClick={this.readButtonClick}/>
					</span>
				</div>
			</div>
		);
	}
}

export default App;
