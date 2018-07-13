import React, { Component } from 'react';

class Counter extends Component {

    constructor() {
        super();
        this.state = {
            num: 0
        }
    }

    render() {
        return(
            <div>
                <p>{this.state.num}</p>
                <button>Click</button>
            </div>
        )
    }
}


export default Counter;