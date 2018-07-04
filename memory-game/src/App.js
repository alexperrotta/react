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


// “unflipping” two mismatched cards
function unflipCards(card1Index, card2Index) {
  let card1 = {
    ...this.state.deck[card1Index],
    isFlipped: false
  };
  let card2 = {
    ...this.state.deck[card2Index],
    isFlipped: false
  };
  
  let newDeck = this.state.deck.map( (card1, card2) => {
    if (card1 !== card2) {
      return card1 && card2;
    }
    
    this.setState({
      deck: newDeck
    });
    
  });
}


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
    if (this.state.deck[cardIndex].isFlipped) {
      return
    }
    // this is the card we're trying to flip
    // creating a copy of the state with the spread operator b/c you can't modify the state directly
    let cardToFlip = {...this.state.deck[cardIndex]};

    // checks if the card we’re trying to pick is already flippedOver
    if (cardToFlip.isFlipped) {
      return;
    } else {
      cardToFlip.isFlipped = true;
    }

    // this makes a copy of the deck
    // cardIndex is the index card that’s being picked, and index is just an iterator for the .map() function
    let newDeck = this.state.deck.map( (card, index) => {
      if (cardIndex === index) {
        // Essentially, we’re making a copy of the deck array, but swapping out the card that we just flipped
        return cardToFlip;
      }
      return card;
    });
    
    /* React won’t let us mutate state directly, we have to use setState() instead. Our state has two arrays that we want to push to, but unfortunately arrays are pass-by-reference, so we can’t just do this.state.deck.push(whatever). Instead, we need to create copies of these arrays to use as “scratch paper”
    Concat returns a brand new array with all the old contents, but it also inserts cardIndex in one fell swoop
    */
    let newPickedCards = this.state.pickedCards.concat(cardIndex);

    // checking to see if the symbols on both cards match
    if (newPickedCards = 2) {
      let card1Index = newPickedCards[0];
      let card2Index = newPickedCards[1];
      if (card1Index !== card2Index) {
        setTimeout(this.unflipCards.bind(this, card1Index, card2Index), 1000);
      }
      newPickedCards = [];
    }

    // this is a copy of the state of the game
    // now that we have the updated version of deck and pickedCards saved to  new variables, we can make the call to setState();
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

    /* this is an array that holds 16 MemoryCard components
      we are using props to tell the Memory Card what symbol to display and if the card is flipped or not
      use key= to differentiate between identical sibling components, this is index and is a 2nd parameter
      we set another prop called pickCard, bind(this, index) is making sure that the function remembers which App instance it is, and it’s also passing down the cardIndex for when the function gets called
    */
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
