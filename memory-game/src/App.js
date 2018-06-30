import React, { Component } from 'react';
import './App.css';

import MemoryCard from './MemoryCard.js';

function generateDeck() {
  let symbols = ['∆', 'ß', '£', '§', '•', '$', '+', 'ø'];
  let deck = [];
  
  for (var i=0; i<16; i++) {
    deck.push({
      card: {
        isFlipped: false,
        Symbol: symbols[i%8]
      }
    })
  }
  shuffle(deck);
  return deck;
}


function shuffle(a) {
  for (let i = a.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [a[i], a[j]] = [a[j], a[i]];
  }
  return a;
}

class App extends Component {
  
  constructor() {
    super();
    this.state = {
      deck: generateDeck(),
      pickedCards: []
    }
  }

  pickCard(cardIndex) {
    if (this.state.deck[cardIndex].isFlipped) {
      return
    }
    let cardToFlip = {...this.state.deck[cardIndex]};

    if (cardToFlip.isFlipped) {
      return;
    } else {
      cardToFlip.isFlipped = true;
    }

    let newDeck = this.state.deck.map( (card, index) => {
      if (cardIndex === index) {
        return cardToFlip;
      }
      return card;
    });
    
    let newPickedCards = this.state.pickedCards.concat(cardIndex);

    this.setState({
        deck: newDeck, 
        pickedCards: newPickedCards
      });
  }
  
  render() {

    var row1 = [];
    var row2 = [];
    var row3 = [];
    var row4 = [];
    for (var i=0; i<4; i++) {
      row1.push(<MemoryCard />);
      row2.push(<MemoryCard />);
      row3.push(<MemoryCard />);
      row4.push(<MemoryCard />);
    }

    let cardsJSX = this.state.deck.map( (card, index) => {
      return <MemoryCard symbol={card.symbol} isFlipped={card.isFlipped} key={index} pickCard={this.pickCard.bind(this, index)} />
    });

    return (
      <div className="App">
        <header className="App-header">
          <h1 className="App-title">Memory Game</h1>
          <p className="App-subtitle">Match cards to win</p>
        </header>

      <div>
        {cardsJSX.slice(0,4)}
      </div>
      <div>
      {cardsJSX.slice(4,8)}
      </div>
      <div>
      {cardsJSX.slice(8,12)}
      </div>
      <div>
      {cardsJSX.slice(12,16)}
      </div>

      </div>

    );
  }
}

export default App;
