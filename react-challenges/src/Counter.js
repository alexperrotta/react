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
                <button onClick={this.IncrementItem}>Click to increment by 1</button>
            </div>
        )
    }
}


export default Counter;