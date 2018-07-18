import React, { Component } from 'react';
import axios from 'axios';

class Counter extends Component {

    constructor() {
        super();
        this.state = {
            counter: 0
        }
    } 

    componentWillMount() {
        axios.get('/').then( ({counter}) => {
            this.setState(counter);
        })
    }

    addCounter() {
        axios.post('/add').then( ({counter}) => this.setState({counter}))
    }


    subtractCounter() {
        axios.post('/subtract').then(counter => this.setState({counter}))
    }

    render() {
        return(
            <div>
                <h1>{this.state.counter}</h1>
                <button onClick={ this.addCounter.bind(this) } >+</button>
                <button onClick={ this.subtractCounter.bind(this) } >-</button>
            </div>
        )
    }
}

export default Counter;