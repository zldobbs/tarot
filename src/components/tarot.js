/*
  tarot

  main app board
*/

import React, { Component } from 'react'; 
import Board from './board';

export default class Tarot extends Component { 
  constructor(props) {
    super(props);

    this.state = {
      cards: []
    }

    this.handleDeckClick = this.handleDeckClick.bind(this);
    this.handleResetClick = this.handleResetClick.bind(this);
  }

  handleDeckClick() {
    let { cards } = this.state; 
    let card = Math.floor(Math.random() * (77 - 0 + 1)) + 0;
    while (this.state.cards.indexOf(card) >= 0) {
      card = Math.floor(Math.random() * (77 - 0 + 1)) + 0;
    }
    cards.push(card);
    this.setState({ cards: cards });
  }

  handleResetClick() {
    this.setState({ cards: [] });
  }

  render() { 
    return(
      <div>
        <div className="logo">
          <h1>TAROT</h1>
        </div>
        <Board cards={this.state.cards}></Board>
        <div className="action-area">
          <div className="deck-wrapper center">
            <img  className="card" 
                  draggable="false" 
                  src={`/img/tarot-cards/back.png`} 
                  alt="deck"
                  onClick={this.handleDeckClick}>
            </img>
          </div>
          <button className="btn center" onClick={this.handleResetClick}>RESET</button>
        </div>
      </div>
    );
  }
}