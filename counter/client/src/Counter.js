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
        axios.get('/').then( ({data}) => {
            this.setState({counter: data.counter});
        })
    }

    addCounter() {
        axios.post('/add').then( ({data}) => {
            this.setState({counter: data.counter});
        })
    }


    subtractCounter() {
        axios.post('/subtract').then( ({data}) => {
            this.setState({counter: data.counter});
        })
    }

    render() {
        return(
            <div>
                <h1>{this.state.counter}</h1>
                <button onClick={ this.addCounter() } >+</button>
                <button onClick={ this.subtractCounter() } >-</button>
            </div>
        )
    }
}

export default Counter;


// handleClick() {
//     this.setState({
//         value: this.state.value + 1
//     });
// }


// render() {
//     return(
//         <div>
//             <h1 onClick={ this.handleClick.bind(this)}>{this.state.value}</h1>
//         </div>