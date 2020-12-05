/*
  card

  tarot card object
*/

import React, { Component } from 'react'; 
import Draggable from 'react-draggable'; 
import ReactCardFlip from 'react-card-flip';

export default class Card extends Component {
  constructor(props) { 
    super(props); 

    this.state = {
      dragging: false,
      isFlipped: false,
      orientation: false,
      controlledPosition: {
        x: 0,
        y: 0
      }
    };

    this.handleDragStart = this.handleDragStart.bind(this);
    this.handleDragStop = this.handleDragStop.bind(this);
  }

  handleDragStart = (e, ui) => {
    const {x, y} = ui;
    this.setState({
      controlledPosition: {x, y},
      dragging: true
    });
    console.log(this.state.x + ", " + this.state.y);
  }

  handleDragStop = (e, ui) => {
    const {dragging} = this.state
    this.setState({dragging: false})
    if (!dragging) {
      this.handleCardClick()
    }
  }

  handleCardClick() {
    if (!this.state.isFlipped) {
      let orientation = Math.floor(Math.random() * (1 - 0 + 1)) + 0;
      let rotate = orientation === 0 ? false : true; 
      this.setState({ 
        isFlipped: true,
        orientation: rotate
      });
    }
  }

  render() {
    let orientation = this.state.orientation === true ? 'rotate-img' : '';
    let {controlledPosition} = this.state
    return(
      <ReactCardFlip isFlipped={this.state.isFlipped} flipDirection="vertical" flipSpeedBackToFront={1.0}>
        <Draggable bounds=".board" onDrag={this.handleDragStart} onStop={this.handleDragStop} poistion={controlledPosition}>
          <div className="card-wrapper card-start shadow">
            <img  className={`card ${orientation}`} 
                  draggable="false" 
                  src={`/img/tarot-cards/back.png`} 
                  alt="card">
            </img>
          </div>
        </Draggable>

        <Draggable bounds=".board" onDrag={this.handleDragStart} onStop={this.handleDragStop} position={controlledPosition}>
          <div className="card-wrapper shadow">
            <img  className={`card ${orientation}`} 
                  draggable="false" 
                  src={`/img/tarot-cards/${this.props.value}.png`} 
                  alt="card">
            </img>
          </div>
        </Draggable>
      </ReactCardFlip>

    );
  }

}