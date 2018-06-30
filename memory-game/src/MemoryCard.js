import React, { Component } from 'react';
import './MemoryCard.css';

class MemoryCard extends Component {
  
  constructor() {
    super();
    this.state = {isFlipped: false};
  }

  clickHandler() {
    this.setState({
      isFlipped: !this.state.isFlipped
    });
  }
  
  render() {
    let memoryCardInnerClass = 'MemoryCardInner';
    if (this.state.isFlipped === true) {
      memoryCardInnerClass += ' flipped';
      console.log(memoryCardInnerClass);
    } 
    return (
      <div className="MemoryCard" onClick={ this.clickHandler.bind(this) }>
        <div className="{memoryCardInnerClass}">
          
          <div className="MemoryCardBack"><img src="https://www.digitalcrafts.com/img/DigitalCrafts-Logo-Wrench.png"/></div>

          <div className="MemoryCardFront">∆</div>
          
        </div>
      </div>
    )
  }

}

export default MemoryCard;
