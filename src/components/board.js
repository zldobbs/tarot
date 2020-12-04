/*
  board

  tarot card board
*/

import React, { Component } from 'react'; 
import Card from './card';

export default class Board extends Component { 
  constructor(props) {
    super(props);
  }

  render() { 
    let card_render = [];
    this.props.cards.forEach((card, i) => { 
      card_render.push(
        <Card key={i} value={card}></Card>
      );
    });

    return(
      <div className="board">
        {card_render}
      </div>
    );
  }
}