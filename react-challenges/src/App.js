import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import RenderingState from './RenderingState';
import Counter from './Counter';
import Poker from './Poker';



class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Five Exercises</h1>
        </header>
        <p className="App-intro">
          <RenderingState />
          <hr />
          <Counter />
           <hr />
          <Poker />
           <hr />

          <hr />
        </p>
      </div>
    );
  }
}

export default App;
