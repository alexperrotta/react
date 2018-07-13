import React, { Component } from 'react';
import './MemoryGame.css';
import './app.css';
import { Link, Route, Switch } from 'react-router-dom';

import MemoryCard from './MemoryCard.js';
import MemoryGame from './MemoryGame.js';
import Ajax from './Ajax.js';


class App extends Component {

    render() {
        return(
            <div className="navbar">
                <Link to="/memory">Memory Game</Link>
                <Link to="/ajax">Ajax</Link>

                <Switch>
                    <Route path="/memory" component={MemoryGame} />
                    <Route path="/ajax" component={Ajax} />
                    <Route path="/" component={MemoryGame} />
                </Switch>
            </div>
        )
    }

}


export default App;