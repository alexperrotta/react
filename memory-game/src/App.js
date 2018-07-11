import React, { Component } from 'react';
import './App.css';

import MemoryCard from './MemoryCard.js';

// set up an array with 16 cards and returns that array
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
  
  let newDeck = this.state.deck.map( (card1, card2) => {
    if (card1 !== card2) {
      return card1 && card2;
    }
    
    this.setState({
      deck: newDeck
    });
    
  });

  


class App extends Component {
  
  constructor() {
    super();
    this.state = {
      deck: generateDeck(),
      pickedCards: []
    }
  }

  // cardIndex rep. the card being flipped over
  pickCard(cardIndex) {
    let newDeck = this.state.deck.map(card => {
      return {...card};
    });

    newDeck[cardIndex].isFlipped = true;

    let newPickedCards = this.state.pickedCards.concat(cardIndex);

    // If they've just selected their second card, compare the 2
    // if they are not the same symbol, flip them back over
    if (newPickedCards.length == 2) {
      let card1Index = newPickedCards[0];
      let card2Index = newPickedCards[1];
      let card1 = newDeck[card1Index];
      let card2 = newDeck[card2Index];
      
      if (card1.symbol != card2.symbol) {
        // unflip both cards
        setTimeout( () => {
          this.unflipCards(card1Index, card2Index);
        }, 1000);
      }
      newPickedCards = [];
    }
      
    this.setState({
      deck: newDeck,
      pickedCards: newPickedCards
    });
  }

  // “unflipping” two mismatched cards
  unflipCards(card1Index, card2Index) {
    let newDeck = this.state.deck.map(card => {
      return {...card};
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

    /* this is an array that holds 16 MemoryCard components
      we are using props to tell the Memory Card what symbol to display and if the card is flipped or not
      use key= to differentiate between identical sibling components, this is index and is a 2nd parameter
      we set another prop called pickCard, bind(this, index) is making sure that the function remembers which App instance it is, and it’s also passing down the cardIndex for when the function gets called
    */
    let cardsJSX = this.state.deck.map( (card, index) => {
      return <MemoryCard symbol={card.symbol} 
                        isFlipped={card.isFlipped} 
                        pickCard={this.pickCard.bind(this, index)} />
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
