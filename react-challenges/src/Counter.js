// Refactor - remove the IncrementItem variable
// define the function inside the button, then you don't have to add .bind()
// { ()=> {this.setState({num: this.state.num +1}) } }

import React, { Component } from 'react';



class Counter extends Component {

    // set the initial state
    constructor() {
        super();
        this.state = {
            num: 0
        }
    }

    // Write the function to increment
    IncrementItem = () => {
        this.setState({ 
            num: this.state.num + 1 
        });
    }
    
    // Pass the method to the button
    render() {
        return(
            <div>
                <p>{this.state.num}</p>
                <button onClick={this.IncrementItem.bind(this)}>Click to increment by 1</button>
            </div>
        )
    }
}


export default Counter;