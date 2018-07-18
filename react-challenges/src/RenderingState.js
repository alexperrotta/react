// can also render a <RenderingState /> component and put the code in a separate file

// alternate return statement - 
// <p>You have {this.state.cats} cats and {this.state.dogs} dogs, therefore you are a { this.state.cats > this.state.dogs ? "cat" : "dog"} person.</p>

import React, { Component } from 'react';

class RenderingState extends Component {
    
    constructor() {
        super();
        this.state = {
            cats: 5,
            dogs: 2
        }
    }

    catOrDogPerson() {
        let numCats = this.state.cats;
        let numDogs = this.state.dogs;
        
        if (numCats > numDogs) {
            return 'cat';
        }
        else {
            return 'dog';
        }
    }    

    render() {
        return(
            <p>You have {numCats} cats and {numDogs} dogs, therefore you are a {this.catOrDogPerson()} person.</p>
        );
    }
}


export default RenderingState;
