import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Button from './Button';

class App extends Component {
	state = {
		name: true
	};
	onButtonClick = () => {
		this.setState(prevState =>({
			name: !prevState.name
		}));
	};

	render() {
		return (
			<div className="App">
				<h1>{this.state.name === true ? "Linked List" : "Linky List"}</h1>
				<button onClick={this.onButtonClick}>name</button>
			</div>
		);
	}
}

export default App;
