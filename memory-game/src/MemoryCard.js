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
    let memoryCardInnerClass = 'memoryCardInner';
    if(isFlipped == true) {
      memoryCardInnerClass.append('flipped');
    } else {
      
    }
    return (
      <div className="MemoryCard" onClick={ this.clickHandler }>
        <div className="MemoryCardInner">
          
          <div className="MemoryCardBack"><img src="https://www.digitalcrafts.com/img/DigitalCrafts-Logo-Wrench.png"/></div>

          <div className="MemoryCardFront">∆</div>
          
        </div>
      </div>
    )
  }

}

export default MemoryCard;
