import React, { Component } from 'react';
import styled from 'styled-components';

class Card extends Component {
	render() {
		const ReadButton = styled.button`
			color: pink;
        `;
        const { cards, readButtonClick } = this.props;
		return (
			<div>
				{cards.length > 0 ? (
					cards.map(name => (
						<div>
							<h1>{name.title}</h1>
							<h1>{name.url}</h1>
							<ReadButton onClick={readButtonClick}>Read</ReadButton>
							<button>Delete</button>
						</div>
					))
				) : (
					<div />
				)}
			</div>
		);
	}
}


export default Card;