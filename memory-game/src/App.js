import React, { Component } from 'react';
import MemoryCard from './MemoryCard.js';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <h1 className="App-title">Memory Game</h1>
          <h3 className="App-subtitle">Match cards to win</h3>
          <div className="MemoryCard" />
        </header>
      </div>

    );
  }
}

export default App;
