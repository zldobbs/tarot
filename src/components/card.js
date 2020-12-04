/*
  card

  tarot card object
*/

import React, { Component } from 'react'; 
import Draggable from 'react-draggable'; 

export default class Card extends Component {
  constructor(props) { 
    super(props); 

    this.state = {
      dragging: false,
      shown: false,
      flipped: false
    };

    this.handleDragStart = this.handleDragStart.bind(this);
    this.handleDragStop = this.handleDragStop.bind(this);
  }

  handleDragStart() {
    this.setState({ dragging: true });
  }

  handleDragStop() {
    const {dragging} = this.state
    this.setState({dragging: false})
    if (!dragging) {
      this.handleCardClick()
    }
  }

  handleCardClick() {
    if (!this.state.shown) {
      let flipped = Math.floor(Math.random() * (1 - 0 + 1)) + 0;
      let rotate = flipped === 0 ? false : true; 
      this.setState({ 
        shown: true,
        flipped: rotate
      });
    }
  }

  render() {
    let flipped = this.state.flipped === true ? 'rotate-img' : '';
    return(
      <Draggable bounds="parent" onDrag={this.handleDragStart} onStop={this.handleDragStop}>
        <div className="wrapper">
          <img  className={`card ${flipped}`} 
                draggable="false" 
                src={`/img/tarot-cards/${this.state.shown ? this.props.value : "back"}.png`} 
                alt="card">
          </img>
        </div>
      </Draggable>
    );
  }

}